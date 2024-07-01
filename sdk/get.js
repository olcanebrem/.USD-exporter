import { Databases } from "appwrite";

const PROJECT_ID = process.env.PROJECT_ID
const DB_ID = process.env.DB_ID
const COLEECTION_ID_PROFILES = process.env.COLEECTION_ID_PROFILES

export default async ({req, res, log, error}) => {

        const client = new client()
        
        client
                .setEndpoint("https://cloud.appwrite.io/v1")
                .setProject(PROJECT_ID)

        const db = new Databases(client)
                
        }

        if(req.method == "GET"){
            const response = await db.listDocuments(
                DB_ID,
                COLEECTION_ID_PROFILES
            )
            return res.json(response.documents)
        }

    
