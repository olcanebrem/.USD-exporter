const sdk = require('node-appwrite');

const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(PROJECT_ID) // Your project ID


const databases = new sdk.Databases(client);

const result = databases.listDocuments(
    DB_ID, // databaseId
    COLLECTION_ID_PROFILES, // collectionId
    false // enabled (optional)
);
