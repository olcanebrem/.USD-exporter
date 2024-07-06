import { Client, Databases } from 'appwrite';
import "./style.css";

document.addEventListener('DOMContentLoaded', function() {
    const client = new Client();
    const DB_ID = "667efb7e00313876acb2";
    const COLLECTION_ID_titleS = "667efbad0031c4393190";
    
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject("667eeaf9002912d4f3ab");

    const db = new Databases(client);
    const titlesList = document.getElementById("task-list");

    if (!titlesList) {
        console.error('task list element not found');
        return;
    }

    async function gettitles() {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_ID_titleS);
            console.log(response);

            response.documents.forEach(task => {
                renderToDom(task);
            });
        } catch (error) {
            console.error(`Error fetching titles:`, error);
        }
    }

    function renderToDom(task) {
            const titleWrapper = `<div>
                                  <p>${task.title}</p>
                                  </div>`;
        titlesList.insertAdjacentHTML("afterbegin", titleWrapper);
    }

    gettitles();
});
