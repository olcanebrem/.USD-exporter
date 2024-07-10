import { Client, Databases, ID } from 'appwrite';


const PROJECT_ID = process.env.PROJECT_ID;

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject(PROJECT_ID); // Your project ID

export default async ({ req, res }) => {
    if (req.method === 'POST') {
        const databases = new Databases(client);

        try {
            const response = await databases.createDocument(
               
            );
            console.log(response); // Output the response
            return res.send('Document created successfully');
        } catch (error) {
            console.error('Error creating document:', error);
            return res.send('error!');
        }
    } else {
        return res.send('error!');
    }
};
