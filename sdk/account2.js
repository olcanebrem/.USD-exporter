const PROJECT_ID = process.env.PROJECT_ID;
const userId = 'aUSERdfdIDa';
const email = 'edlcanedfdfbrem@gmail.com';
const password = 'youfdr_password';
const name = 'Johfn Doe';

const requestData = {
  userId,
  email,
  password,
  name
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Appwrite-Response-Format': '1.5.0',
    'X-Appwrite-Project': "667eeaf9002912d4f3ab" // Replace with your project ID
  },
  body: JSON.stringify(requestData)
};

fetch('https://cloud.appwrite.io/v1/account', requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log('User created:', data);
    // Handle the response data as needed
  })
  .catch(error => {
    console.error('Error creating user:', error);
    // Handle errors
  });
