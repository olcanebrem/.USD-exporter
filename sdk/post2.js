const sdk = require("node-appwrite");
const PROJECT_ID = process.env.PROJECT_ID
const DB_ID = process.env.DB_ID
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES


async function createDocument() {
       
        const client = new sdk.Client()
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject(PROJECT_ID); // Your project ID
    
        const Databases = new sdk.Databases(client);
    
        try {
            const response = await Databases.createDocument(
                DB_ID, // databaseId
                COLLECTION_ID_PROFILES, // collectionId
                sdk.ID.unique(), // documentId
                {}, // data
                [] // permissions (optional)
            );
    
            console.log('Document created:', result);
        } catch (error) {
            console.error('Error creating document:', error);
        }
    };
    


// Call the async function
createDocument();
