import { Client, Account, ID } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID;
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
                name
            );
            console.log(result); // Output the response
            return res.send('Account created successfully');
        } catch (error) {
            console.error('Error creating account:', error);
            return res.send('Failed to create account');
        }
    } else {
        return res.send('Method Not Allowed');
    }
}
