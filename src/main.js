import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667eeaf9002912d4f3ab');

const databases = new Databases(client);

const promise = databases.createDocument(
    '667efb7e00313876acb2',
    '667efbad0031c4393190',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
