# Usa una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del servidor
COPY . .

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
