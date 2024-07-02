import { client, Databases, ID } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID
const DB_ID = process.env.DB_ID
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES


    async function addTask(e){
        e.preventDefault()

        const taskBody = e.target.body.value
        if (taskBody == ''){
        alert('Form cannot be empty!')
        return
        }
        client
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject(PROJECT_ID); // Your project ID
    
        const db = new Databases(client);
    
        
        const response = await Databases.createDocument(
            DB_ID, // databaseId
            COLLECTION_ID_PROFILES, // collectionId
            ID.unique(), // documentId
            {"body":0}, // data
            [] // permissions (optional)
            );

    }
    
// Call the async function
createDocument();
