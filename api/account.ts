import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

//TODO: env not working here, need to figure that out
client
  .setEndpoint("http://localhost/v1")
  .setProject("631f864368a7fe90d698");

const createAccount = async (email: string, password: string) => {
  return await account.create(
    "unique()",
    email,
    password
  );
}

const createSession = async (email: string, password: string) => {
  return await account.createEmailSession(
    email,
    password
  );
}

const createToken = async () => {
  return await account.createJWT();
}

const deleteSession = async () => {
  return await account.deleteSession('current');
}

//TODO: getting SMTP Disabled
const createAccountRecovery = async (email: string) => {
  return await account.createRecovery(email, 'http://localhost:3000/forgot');
}

export {
  createAccount,
  createSession,
  createToken,
  deleteSession,
  createAccountRecovery
}