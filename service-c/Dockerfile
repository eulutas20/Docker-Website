# Node.js resmi image'ını kullan
FROM node:alpine
# Çalışma dizini belirle
WORKDIR /usr/src/app
# Bağımlılıkları kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı 3001 portunda çalıştır
EXPOSE 3001

# Uygulamayı başlat
CMD ["node", "index.js"]
