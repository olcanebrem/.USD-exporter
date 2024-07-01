import { Client, Databases } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID;
const DB_ID = process.env.DB_ID;
const COLLECTION_ID_PROFILES = process.env.COLLECTION_ID_PROFILES;

export default async ({ req, res, log, error }) => {
    
    const client = new Client();

    client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject(PROJECT_ID);

    const db = new Databases(client);

    if (req.method === "GET") {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_ID_PROFILES);
            return res.json(response.documents);
        } catch (err) {
            error("Error fetching documents:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
};
