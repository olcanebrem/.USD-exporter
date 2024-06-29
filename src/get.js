
import { Client, Databases, ID } from 'appwrite';

// Appwrite Client oluşturma
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint'i
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID) // Appwrite proje ID'si, Appwrite panelinizden alınmalıdır
// Databases nesnesini oluşturma
const databases = new Databases(client);

// Belge oluşturma işlemi
const promise = databases.createDocument(
    '667efb7e00313876acb2', // Veritabanı ID'si, Appwrite panelinizden alınmalıdır
    '667efbad0031c4393190', // Koleksiyon ID'si, Appwrite panelinizden alınmalıdır
    ID.unique() // Benzersiz belge ID'si oluşturma
);

// Belge oluşturma işleminin sonucunu işleme
promise.then(
    function (response) {
        console.log('Document created:', response);
    },
    function (error) {
        console.error('Error creating document:', error);
    }
);
