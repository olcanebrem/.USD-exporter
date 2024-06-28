import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667eeaf9002912d4f3ab');

const databases = new Databases(client);

const promise = databases.listDocuments(
    '667efb7e00313876acb2', // databaseId
    '667efbad0031c4393190'  // collectionId
);

promise.then(function (response) {
    console.log(response.documents); // Prints the list of documents
}, function (error) {
    console.error(error);
});
