export default {
  email: ( email : string ) => { return ( email.match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ) ) },
  password: ( password : string ) => { return password.length > 5 }, // TODO: get a pw regex
  passwordConfirmation: ( password: string, passwordConfirmation : string ) => { return ( password === passwordConfirmation ) }
}