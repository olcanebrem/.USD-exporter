import { Client , Databases} from 'appwrite';
import ".style/css"

  const client = new Client()
  const PROJECT_ID = process.env.PROJECT_ID;
  const DB_ID = process.env.DB_ID;
  const COLLECTION_ID_TASKS = process.env.COLLECTION_ID_PROFILES;
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)
    //.setKey(process.env.APPWRITE_API_KEY);
const db = new Databases(client)

async function getTasks(){
  const response  = await db.listDocuments(
  DB_ID,
  COLLECTION_ID_TASKS)
  console.log(response)
}
  getTasks()