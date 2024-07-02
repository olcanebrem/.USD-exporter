import { Client, Databases, ID } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID
const DB_ID = process.env.DB_ID
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES


    async function createDocument(){

        const client = new Client();
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject(PROJECT_ID); // Your project ID
    
        const db = new Databases(client);
    
        
        const response = await db.createDocument(
            DB_ID, // databaseId
            COLLECTION_ID_PROFILES, // collectionId
            ID.unique(), // documentId
            {"body":"hello world"}, // data
            [] // permissions (optional)
            );

        console.log(response);
    }
    
// Call the async function
createDocument();
