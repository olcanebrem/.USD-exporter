import { Client, Databases } from 'node-appwrite';

const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

export default async ({ req, res, log, error }) => {
  const client = new Client();

  client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

  const db = new Databases(client);

  if (req.method === 'POST') {
    try {
      const { data, read, write } = req.body; // POST isteği ile gönderilen veri
      const response = await db.createDocument(DB_ID, COLLECTION_ID_PROFILES, 'unique()', data, read, write);
      return res.json(response);
    } catch (err) {
      console.error("Error creating document:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};
