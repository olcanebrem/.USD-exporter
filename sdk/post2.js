import { Client, Databases, ID } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID
const DB_ID = process.env.DB_ID
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES


export default async ({ req, res, log, error }) => {

        const client = new Client();
        
        client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);
    
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

