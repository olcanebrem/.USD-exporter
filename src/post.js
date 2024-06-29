import { ID } from "appwrite";

async function createDocument() {
    const url = 'https://cloud.appwrite.io/v1/databases/667efb7e00313876acb2/collections/667efbad0031c4393190/documents';
    
    const documentData = {
        age: 3,
    };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Project': '667eeaf9002912d4f3ab', // Your project ID
        },
        body: JSON.stringify({
            
            documentId: ID.unique(),
            data: documentData,

        })
    });

    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    } else {
        console.error('Error creating document:', response.statusText);
    }
}

createDocument();
