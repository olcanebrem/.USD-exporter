const sdk = require('node-appwrite');

const PROJECT_ID = process.env.PROJECT_ID || 'your_project_id';
const DB_ID = process.env.DB_ID || 'your_db_id';
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES || 'your_collection_id';

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(PROJECT_ID); // Your project ID

const databases = new sdk.Databases(client);

databases.listDocuments(
    DB_ID, // databaseId
    COLLECTION_ID_PROFILES, // collectionId
    false, // enabled (optional)
    (result) => {
        console.log('Documents:', result.documents);
    },
    (error) => {
        console.error('Error listing documents:', error);
    }
);
