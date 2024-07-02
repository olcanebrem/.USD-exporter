import { Client, Databases, ID} from 'node-appwrite';

const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

// Örnek JSON verisi (istemci tarafından gönderilen)
const jsonData = {
  "age": 54,
  "note": [],
  "title": "ooo",
  "numb": null,
  "$id": ID.unique(),
  "$tenant": "159567",
  "$createdAt": "2024-06-28T20:50:29.678+00:00",
  "$updatedAt": "2024-06-28T20:59:54.102+00:00",
  "$permissions": [],
  "$databaseId": "667efb7e00313876acb2",
  "$collectionId": "667efbad0031c4393190"
};

// Express.js üzerinde bir örnek route işlevi
export default async function createDocument(req, res) {
  const client = new Client();

  client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

  const db = new Databases(client);

  if (req.method === 'POST') {
    try {
      
      const read = ['*']; // Tüm kullanıcılar okuyabilir
      const write = [`user:${jsonData.$id}`]; // Sadece bu belge sahibi yazabilir
      // Veriyi doğrudan JSON'dan alabiliriz
      const response = await db.createDocument(DB_ID, COLLECTION_ID_PROFILES, 'unique()', jsonData, read, write);
      
      return res.json(response);
    } catch (err) {
      console.error("Error creating document:", err);
      return res.json({ error: "Error creating document" });
    }
  } else {
    return res.json({ error: "Method Not Allowed" });
  }
}

