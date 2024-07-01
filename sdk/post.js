import { Client, Databases ,ID } from 'node-appwrite';

const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

export default async ({ req, res, log, error }) => {
  const client = new Client();

  client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

  const db = new Databases(client);

  if (req.method == 'POST') {
    
    const { data, read, write } = req.body; // POST isteği ile gönderilen veri
    data = {
      "age": 1,
      "note": [],
      "title": "works",
      "numb": null,
      "$id": "667f221500115624a682",
      "$tenant": "159567",
      "$createdAt": "2024-06-28T20:50:29.678+00:00",
      "$updatedAt": "2024-06-28T20:59:54.102+00:00",
      "$permissions": [],
      "$databaseId": "667efb7e00313876acb2",
      "$collectionId": "667efbad0031c4393190"
    };
    const response = await db.createDocument(DB_ID, COLLECTION_ID_PROFILES, ID.unique(), data, read, write);
  
    return res.json(response);
    
  }

  return res.send("Method Not Allowed");
};
