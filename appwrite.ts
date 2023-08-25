import { Client,Account, ID, Databases,Storage } from "appwrite";

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!) 

const account = new Account(client)
const databses = new Databases(client)
const storage = new Storage(client)


export {client,account,databses,storage,ID}