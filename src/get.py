from appwrite.client import Client

client = Client()
client.set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('667eeaf9002912d4f3ab') # Your project ID
client.set_key('e409c3557f517634c4627330a371580277d1cc97eb8557d5bbb14332164ff1f1f3508cee0f33515bc425674643f1a591031be6797f69c053d105c65a8f6f0909e12cda16796579e4a68d9320230bbb0441bb3a192c3d447bfe23fe21cea1c74ac4f15246aad41f09d7f264d74f9f8fb1307fee63e7d5e25ff8d8c62baa30301d') # Your secret API key

databases = Databases(client)

result = databases.get(
    database_id = '667efb7e00313876acb2'
)
