import { Client, Account } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID || 'your_project_id';
const DB_ID = process.env.DB_ID || 'your_db_id';
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES || 'your_collection_id';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(PROJECT_ID); // Your project ID

const account = new Account(client);

const result = await account.create(
    ID.unique(), // userId
    'email@example.com', // email
    '', // password
    '<NAME>' // name (optional)
);

console.log(response);
