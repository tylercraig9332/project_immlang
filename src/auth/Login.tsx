import type { NextPage } from 'next'
import React, { useRef } from 'react'
import AuthCard from './components/AuthCard'
import { createSession } from 'api'

const Login: NextPage = () => {

  const userRef = useRef<HTMLInputElement>( null )
  const pwRef = useRef<HTMLInputElement>( null )

  const handleLogin = ( e : React.FormEvent ) => {
    e.preventDefault()
    const username = userRef?.current?.value ?? ``
    const password = pwRef?.current?.value ?? ``
    // TODO: validate fields before sending to the backend
    createSession( username, password )
  }

  return (
    <AuthCard title="Login" onSubmit={handleLogin} buttonText="Login">
      <input
        name="username" type="text" placeholder="email"
        className="input input-bordered input-accent w-full max-w-xs"
        ref={userRef}
      />
      <input
        name="password" type="password" placeholder="password"
        className="input input-bordered input-accent w-full max-w-xs"
        ref={pwRef}
      />
    </AuthCard>
  )
}

export default Login
