const express = require('express');
const { Client, Users } = require('appwrite');

const app = express();

app.use(express.json());

app.post('/createUser', async (req, res) => {
    const { email, password, name } = req.body;

    const client = new Client();
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint URL
        .setProject('667eeaf9002912d4f3ab'); // Appwrite proje ID'si

    const users = new Users(client);

    try {
        const response = await users.create('unique()', email, password, name);
        res.json(response);
    } catch (error) {
        console.error('Error creating user:', error);
      
    }
});
