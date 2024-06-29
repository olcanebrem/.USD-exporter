import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('667eeaf9002912d4f3ab'); // Your project ID

const account = new Account(client);

const result = await account.get();

console.log(response);
