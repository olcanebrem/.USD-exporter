const express = require('express');
const bodyParser = require('body-parser');
import { Client, Databases, ID } from ('node-appwrite');

const app = express();
const PORT = process.env.PORT || 3000;

const PROJECT_ID = process.env.PROJECT_ID || 'your_project_id';
const DB_ID = process.env.DB_ID || 'your_db_id';
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES || 'your_collection_id';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API Endpoint
  .setProject(PROJECT_ID); // Appwrite Project ID

const databases = new Databases(client);

app.use(bodyParser.json());

app.post('/api/documents', async (req, res) => {
  try {
    const { data } = req.body;

    const read = ['*']; // Everyone can read
    const write = ['*']; // Everyone can write

    const response = await databases.createDocument(
      DB_ID,
      COLLECTION_ID_PROFILES,
      ID.unique(), // Use 'unique()' to generate a unique ID for the document
      data,
      read,
      write
    );

    res.json(response);
  } catch (err) {
    console.error('Error creating document:', err);
    res.status(500).json({ error: 'Error creating document' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
