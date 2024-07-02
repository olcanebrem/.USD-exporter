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

  const server = http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/api/documents') {
      let body = '';
  
      req.on('data', chunk => {
        body += chunk.toString();
      });
  
      req.on('end', async () => {
        try {
          const parsedBody = JSON.parse(body);
          const { data } = parsedBody;
  
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
  
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(response));
        } catch (err) {
          console.error('Error creating document:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Error creating document' }));
        }
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
  });
    
}

