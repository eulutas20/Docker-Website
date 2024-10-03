FROM node:alpine
# Node.js resmi Base Image'ını kullan

# Uygulama dizinini oluştur
WORKDIR /usr/src/app

# Uygulamanın bağımlılıklarını yükle
# package.json ve package-lock.json'ı kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulama içinde çalışacak portu belirt
EXPOSE 3000

# Uygulamayı çalıştır
CMD ["node", "index.js"]
