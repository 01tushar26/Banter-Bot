import conf from "../conf/conf";
import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
