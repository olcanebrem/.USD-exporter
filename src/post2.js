const { Client, Database } = require('node-appwrite');
require('dotenv').config();

// SDK'yı başlat
let client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API uç noktası
    .setProject('667eeaf9002912d4f3ab') // Proje ID'si
    .setKey(process.env.APPWRITE_API_KEY); // API anahtarı

// Belge oluşturma fonksiyonu
async function createDocument() {
    try {
        const database = client.database; // Client üzerinden database özelliğini kullanın

        const documentData = {
            title: 'OL22CAN',
            numb: 'd'
        };

        const collectionId = '667efbad0031c4393190'; // Koleksiyon ID'si
        const response = await database.createDocument(collectionId, documentData);

        console.log('Document created successfully:', response);
    } catch (error) {
        console.error('Error creating document:', error);
    }
}

createDocument();
