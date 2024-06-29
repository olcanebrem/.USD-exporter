import { Databases } from "appwrite";

const PROJECT_ID = "667eeaf9002912d4f3ab"
const DB_ID = "667efb7e00313876acb2"
const COLEECTION_ID_PROFILES = "667efbad0031c4393190"

export default async ({req, res, log, error}) => {

        const client = new client()
        
        client
                .setEndpoint("667eeaf9002912d4f3ab")
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

    
