import { Client, Account, ID } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID || 'your_project_id';
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API Endpoint
    .setProject(PROJECT_ID); // Your project ID

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password, name } = req.body; // Assuming email, password, and name are sent in the request body
        
        const account = new Account(client);

        try {
            const result = await account.create(
                ID.unique(), // userId
                email,
                password,
                name || '' // Optional: If name is not provided, pass an empty string
            );
            console.log(result); // Output the response
            return res.status(200).json({ message: 'Account created successfully', result });
        } catch (error) {
            console.error('Error creating account:', error);
            return res.status(500).json({ error: 'Failed to create account' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
