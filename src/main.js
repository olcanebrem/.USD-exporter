import { Client, Databases, ID } from "node-appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('667eeaf9002912d4f3ab'); // Your project ID

const databases = new Databases(client);

// Wrap the database operation in an async function
async function createDocument() {
    try {
        const result = await databases.createDocument(
            '667efb7e00313876acb2', // databaseId
            '667efbad0031c4393190', // collectionId
            ID.unique(), // documentId
            {
                "nickName": "yessir3000porn0",
                "age": "12",
                "note": [4.4554],
            }, // data
            ["*"] // permissions (optional)
        );

        console.log(result);
    } catch (error) {
        console.error("Error creating document:", error);
    }
}
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.667eeaf9002912d4f3ab)
      .setKey(process.env.667effa3288876b66351);
createDocument();

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
    // You can log messages to the console
    log('Hello, Logs!');
    // If something goes wrong, log an error
    error('Hello, Errors!');

    // The `req` object contains the request data
    if (req.method === 'GET') {
        // Send a response with the res object helpers
        // `res.send()` dispatches a string back to the client
        return res.send('Hello, World!');
    }

    // `res.json()` is a handy helper for sending JSON
    return res.json({
        motto: 'Build like a team of hundreds_',
        learn: 'https://appwrite.io/docs',
        connect: 'https://appwrite.io/discord',
        getInspired: 'https://builtwith.appwrite.io',
    });
};
