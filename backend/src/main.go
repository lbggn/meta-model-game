package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

// Phrase représente une phrase du méta-modèle
type Phrase struct {
	ID          primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Text        string             `json:"text,omitempty" bson:"text,omitempty"`
	Category    string             `json:"category,omitempty" bson:"category,omitempty"`
	SubCategory string             `json:"subCategory,omitempty" bson:"subCategory,omitempty"`
	Question    string             `json:"question,omitempty" bson:"question,omitempty"`
}

// ConnectDB établit la connexion à MongoDB
func ConnectDB() *mongo.Client {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Vérifier la connexion à MongoDB
	err = client.Ping(context.TODO(), readpref.Primary())
	if err != nil {
		log.Fatal("Impossible de se connecter à MongoDB :", err)
	}

	fmt.Println("Connexion réussie à MongoDB")
	return client
}

// GetAllPhrases retourne toutes les phrases stockées dans la base de données
func GetAllPhrases(client *mongo.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		collection := client.Database("metaModelGame").Collection("phrases")

		// Récupérer toutes les phrases de la collection
		cursor, err := collection.Find(context.TODO(), bson.D{})
		if err != nil {
			http.Error(w, "Erreur lors de la récupération des phrases", http.StatusInternalServerError)
			return
		}
		defer cursor.Close(context.TODO())

		var phrases []Phrase
		if err = cursor.All(context.TODO(), &phrases); err != nil {
			http.Error(w, "Erreur lors de la lecture des phrases", http.StatusInternalServerError)
			return
		}

		// Renvoyer les phrases en JSON
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(phrases)
	}
}

// GetFilteredPhrases retourne une phrase aléatoire, éventuellement filtrée par catégorie ou sous-catégorie
func GetFilteredPhrases(client *mongo.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		collection := client.Database("metaModelGame").Collection("phrases")

		// Récupérer les paramètres de la requête pour le filtrage
		category := r.URL.Query().Get("category")
		subCategory := r.URL.Query().Get("subCategory")

		// Construire le filtre MongoDB
		filter := bson.D{}
		if category != "" {
			filter = append(filter, bson.E{"category", category})
		}
		if subCategory != "" {
			filter = append(filter, bson.E{"subCategory", subCategory})
		}

		// Compter le nombre de phrases correspondant au filtre
		count, err := collection.CountDocuments(context.TODO(), filter)
		if err != nil {
			http.Error(w, "Erreur lors du comptage des phrases", http.StatusInternalServerError)
			return
		}

		if count == 0 {
			http.Error(w, "Aucune phrase ne correspond aux critères", http.StatusNotFound)
			return
		}

		// Générer un offset aléatoire
		rand.Seed(time.Now().UnixNano())
		skip := rand.Int63n(count)

		// Trouver une phrase en utilisant l'offset aléatoire et le filtre
		options := options.FindOne().SetSkip(skip)
		var phrase Phrase
		err = collection.FindOne(context.TODO(), filter, options).Decode(&phrase)
		if err != nil {
			http.Error(w, "Erreur lors de la récupération de la phrase", http.StatusInternalServerError)
			return
		}

		// Renvoyer la phrase en JSON
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(phrase)
	}
}

// CreatePhrase insère une nouvelle phrase dans la base de données
func CreatePhrase(client *mongo.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var phrase Phrase
		err := json.NewDecoder(r.Body).Decode(&phrase)
		if err != nil {
			http.Error(w, "Données invalides", http.StatusBadRequest)
			return
		}

		collection := client.Database("metaModelGame").Collection("phrases")
		result, err := collection.InsertOne(context.TODO(), phrase)
		if err != nil {
			http.Error(w, "Erreur lors de l'insertion de la phrase", http.StatusInternalServerError)
			return
		}

		json.NewEncoder(w).Encode(result)
	}
}

func main() {
	client := ConnectDB()

	router := mux.NewRouter()

	// Routes
	router.HandleFunc("/api/phrases", GetAllPhrases(client)).Methods("GET")     // Liste toutes les phrases
	router.HandleFunc("/api/phrase", GetFilteredPhrases(client)).Methods("GET") // Phrase filtrée ou aléatoire
	router.HandleFunc("/api/phrase", CreatePhrase(client)).Methods("POST")      // Créer une nouvelle phrase

	// Middleware CORS
	handler := cors.Default().Handler(router)

	// Démarre le serveur
	fmt.Println("Serveur démarré sur le port 8000")
	log.Fatal(http.ListenAndServe(":8000", handler))
}
