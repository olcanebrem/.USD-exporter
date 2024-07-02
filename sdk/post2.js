import { Client, Databases, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('667eeaf9002912d4f3ab'); // Your project ID

// Initialize the Databases service
const databases = new Databases(client);

export default async function createDocument() {
    try {
        const response = await databases.createDocument(
            '667efb7e00313876acb2', // Database ID
            '667efbad0031c4393190', // Collection ID
            ID.unique(), // Document ID (Appwrite will generate a unique ID)
            {
                age: 1,
            }
        );
        console.log(response); // Output the response
    } catch (error) {
        console.error('Error creating document:', error);
    }
}

createDocument();
