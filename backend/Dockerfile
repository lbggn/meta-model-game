# Dockerfile for the Go backend
FROM golang:1.23-alpine

WORKDIR /app

# Copier le fichier Go mod et Go sum
COPY src/go.mod src/go.sum ./

# Installer les dépendances
RUN go mod download

# Copier le code source
COPY src/ .

# Compiler l'application Go
RUN go build -o main .

# Exposer le port sur lequel l'application fonctionne
EXPOSE 8000

# Lancer l'application
CMD ["./main"]
