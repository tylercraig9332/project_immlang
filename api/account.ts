import { Account } from 'appwrite'
import { provider } from './api'

const accountProvider = () => { return new Account( provider() ) }


const createAccount = ( email : string, password: string ) => {
  const account = accountProvider()
  return account.create( `unique()`, email, password )
}

const createSession = ( email : string, password : string ) => {
  const account = accountProvider()
  return account.createEmailSession( email, password )
}



export {
  createAccount,
  createSession
}