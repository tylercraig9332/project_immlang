import { Client as Appwrite } from 'appwrite'
export const provider = () => {
  const client = new Appwrite()
  client.setEndpoint(process.env.APPWRITE_ENDPOINT_URL ?? ``).setProject(`project_Immlang`)

  return client
}