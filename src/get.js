import * as Appwrite from 'appwrite';

// Appwrite bağlantısı oluşturma
const client = new Appwrite();
client
    .setEndpoint('https://cloud.appwrite.io') // Appwrite endpoint'i
    .setProject('667eeaf9002912d4f3ab') // Appwrite proje ID'si
    .setKey('YOUR_API_KEY'); // API anahtarınız

// Belgeyi alma işlevi
async function fetchDocument(documentId) {
    try {
        const response = await client.database.getDocument(
            '667efb7e00313876acb2', // Veritabanı ID'si
            '667efbad0031c4393190', // Koleksiyon ID'si
            documentId // Belge ID'si
        );

        console.log('Fetched Document:', response);
    } catch (error) {
        console.error('Error fetching document:', error);
    }
}

// Belgeyi alma işlevini çağırın
fetchDocument('documentId');
