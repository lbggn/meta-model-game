# Utiliser une image de base Node.js pour construire l'application
FROM node:14 as build

WORKDIR /app

# Copier le package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application et construire
COPY . .
RUN npm run build

# Utiliser une image nginx pour servir l'application React
FROM nginx:alpine

# Copier les fichiers de construction dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port
EXPOSE 3000

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
