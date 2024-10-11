import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importer le fichier CSS

// Liste des catégories et sous-catégories
const categories = {
  "Omission": [
    "Suppression simple",
    "Manque d'index référentiel",
    "Manque du comparatif",
    "Verbe non-spécifique"
  ],
  "Généralisation": [
    "Quantifieur universel",
    "Origine perdue",
    "Opérateurs modaux",
    "Nominalisation"
  ],
  "Distorsion": [
    "Lecture de pensée",
    "Cause-effet",
    "Équivalence complexe",
    "Présupposé"
  ]
};

function App() {
  // États pour la partie jeu
  const [phrase, setPhrase] = useState(null);
  const [categoryGuess, setCategoryGuess] = useState('');
  const [subCategoryGuess, setSubCategoryGuess] = useState('');
  const [correct, setCorrect] = useState(null); // true, false, or null
  const [loading, setLoading] = useState(true);

  // États pour le filtrage de la catégorie
  const [filterCategory, setFilterCategory] = useState('');

  // États pour soumettre une nouvelle phrase
  const [newText, setNewText] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newSubCategory, setNewSubCategory] = useState('');
  const [newQuestion, setNewQuestion] = useState('');

  // État pour stocker toutes les phrases récupérées depuis MongoDB
  const [allPhrases, setAllPhrases] = useState([]);

  // État pour gérer l'onglet actif (jeu ou liste des phrases)
  const [activeTab, setActiveTab] = useState('jeu');

  // Charger toutes les phrases depuis MongoDB
  const fetchAllPhrases = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/phrases');
      setAllPhrases(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération de toutes les phrases :", error);
    }
  };

  // Charger une phrase aléatoire ou filtrée pour la partie jeu
  const fetchFilteredPhraseForGame = async () => {
    try {
      setLoading(true);
      const params = {};
      if (filterCategory) params.category = filterCategory;

      const response = await axios.get('http://localhost:8000/api/phrase', { params });
      setPhrase(response.data);
      setLoading(false);
      setCorrect(null); // Réinitialiser le feedback
      setCategoryGuess('');
      setSubCategoryGuess('');
    } catch (error) {
      console.error("Erreur lors de la récupération de la phrase :", error);
      setLoading(false);
    }
  };

  // Vérifier si la catégorie et sous-catégorie devinées sont correctes
  const checkAnswer = () => {
    if (phrase) {
      const isCorrectCategory = phrase.category === categoryGuess;
      const isCorrectSubCategory = phrase.subCategory === subCategoryGuess;
      setCorrect(isCorrectCategory && isCorrectSubCategory);
    }
  };

  // Soumettre une nouvelle phrase
  const submitNewPhrase = async () => {
    try {
      const newPhrase = {
        text: newText,
        category: newCategory,
        subCategory: newSubCategory,
        question: newQuestion
      };
      await axios.post('http://localhost:8000/api/phrase', newPhrase);
      alert('Phrase ajoutée avec succès !');
      setNewText('');
      setNewCategory('');
      setNewSubCategory('');
      setNewQuestion('');
      fetchAllPhrases();  // Recharger les phrases après l'ajout
    } catch (error) {
      console.error("Erreur lors de l'ajout de la phrase :", error);
    }
  };

  // Charger une nouvelle phrase au démarrage
  useEffect(() => {
    fetchFilteredPhraseForGame(); // Charger une phrase avec ou sans filtre
    fetchAllPhrases();  // Charger toutes les phrases lors du démarrage
  }, []);

  return (
    <div className="app-container">
      <h1>Jeu du Méta-modèle</h1>

      {/* Navigation par onglet */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'jeu' ? 'active' : ''}`}
          onClick={() => setActiveTab('jeu')}
        >
          Jeu
        </button>
        <button
          className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          Liste des phrases
        </button>
      </div>

      {/* Affichage du contenu en fonction de l'onglet sélectionné */}
      {activeTab === 'jeu' && (
        <>
          {/* Filtres pour le jeu */}
          <div className="category-filters">
            <p>Filtrer par catégorie :</p>
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                className={`filter-button ${filterCategory === cat ? 'selected' : ''}`}
                onClick={() => {
                  setFilterCategory(filterCategory === cat ? '' : cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bouton pour charger une nouvelle phrase */}
          <button className="new-phrase-button" onClick={fetchFilteredPhraseForGame}>
            Nouvelle phrase
          </button>

          {/* Chargement de la phrase à deviner */}
          {loading && <p>Chargement...</p>}
          {!loading && phrase && (
            <div className="phrase-container">
              <p className="phrase-text"><strong>Phrase :</strong> {phrase.text}</p>

              {/* Sélection de la catégorie */}
              <label>
                Sélectionner la catégorie :
                <select value={categoryGuess} onChange={(e) => setCategoryGuess(e.target.value)}>
                  <option value="">Choisir une catégorie</option>
                  {Object.keys(categories).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </label>
              <br />

              {/* Sélection de la sous-catégorie */}
              <label>
                Sélectionner la sous-catégorie : 
                <select
                  value={subCategoryGuess}
                  onChange={(e) => setSubCategoryGuess(e.target.value)}
                  disabled={!categoryGuess} // Désactiver si la catégorie n'est pas sélectionnée
                >
                  <option value="">Choisir une sous-catégorie</option>
                  {categoryGuess &&
                    categories[categoryGuess].map((subCat) => (
                      <option key={subCat} value={subCat}>{subCat}</option>
                    ))}
                </select>
              </label>
              <br />

              <button className="check-button" onClick={checkAnswer}>Vérifier la réponse</button>
            </div>
          )}

          {/* Affichage du résultat */}
          {correct === true && (
            <div className="result">
              <p className="correct">Correct ! 🎉</p>
              <p><strong>Question associée :</strong> {phrase.question}</p>
            </div>
          )}
          {correct === false && (
            <div className="result">
              <p className="incorrect">Incorrect 😞</p>
              <p><strong>La bonne catégorie :</strong> {phrase.category}</p>
              <p><strong>La bonne sous-catégorie :</strong> {phrase.subCategory}</p>
              <p><strong>Question à poser :</strong> {phrase.question}</p>
            </div>
          )}

          {/* Section pour soumettre une nouvelle phrase */}
          <div className="section new-phrase-section">
            <h2>Ajouter une nouvelle phrase</h2>
            <input
              type="text"
              placeholder="Texte de la phrase"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <br />
            <label>
              Catégorie :
              <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                <option value="">Sélectionner une catégorie</option>
                {Object.keys(categories).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Sous-catégorie :
              <select value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)}>
                <option value="">Sélectionner une sous-catégorie</option>
                {newCategory &&
                  categories[newCategory].map((subCat) => (
                    <option key={subCat} value={subCat}>{subCat}</option>
                  ))}
              </select>
            </label>
            <br />
            <label>
              Question :
              <input
                type="text"
                placeholder="Exemple de question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </label>
            <br />
            <button className="submit-button" onClick={submitNewPhrase}>Ajouter la phrase</button>
          </div>
        </>
      )}

      {/* Afficher la liste des phrases sous forme de tableau */}
      {activeTab === 'list' && (
        <div className="section all-phrases-section">
          <h2>Liste de toutes les phrases</h2>
          <table className="phrase-table">
            <thead>
              <tr>
                <th>Phrase</th>
                <th>Catégorie</th>
                <th>Sous-catégorie</th>
                <th>Question</th>
              </tr>
            </thead>
            <tbody>
              {allPhrases.map((phrase, index) => (
                <tr key={index}>
                  <td>{phrase.text}</td>
                  <td>{phrase.category}</td>
                  <td>{phrase.subCategory}</td>
                  <td>{phrase.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
