import { Client, Databases } from 'node-appwrite';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const db = new Databases(client);

// CORS ayarları
app.use(cors({
  origin: 'https://olcanebrem.com',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));

// GET endpoint
app.get('/api/documents', async (req, res) => {
    try {
        const response = await db.listDocuments(DB_ID, COLLECTION_ID_PROFILES);
        res.json(response.documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
