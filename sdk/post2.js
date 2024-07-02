import { Client, Databases, ID } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

export default async (context) => {
    const { req, res, log, error } = context;

    async function addTask() {
        const client = new Client();
        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(PROJECT_ID);

        const db = new Databases(client);

        try {
            const response = await db.createDocument(
                DB_ID, // databaseId
                COLLECTION_ID_PROFILES, // collectionId
                ID.unique(), // documentId
                { "title": "hello world" }, // data
                [] // permissions (optional)
            );
            console.log(response);
            return res.json({ success: true, data: response });
        } catch (err) {
            console.error(err);
            return res.json({ success: false, error: err.message });
        }
    }

    if (req.method === 'POST') {
        await addTask();
    } else {
        return res.json({ success: false, error: 'Method Not Allowed' });
    }
};
