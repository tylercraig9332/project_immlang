import React from 'react'
import { ErrorAlert } from 'src/components/Alert'

type AuthCardProps = { title: string, buttonText: string, errorMessage?: string, onSubmit: ( _e :React.FormEvent ) => void, children: React.ReactNode }

const AuthCard = ({title, buttonText, errorMessage, onSubmit, children} : AuthCardProps ) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="card w-96 bg-accent text-primary-content">
        <div className="card-body">
          <h1 className="card-title my-2">{title}</h1>
          <div className="flex flex-col gap-3">{children}</div>
          <ErrorAlert errorMessage={errorMessage}></ErrorAlert>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-secondary" type="submit">{buttonText}</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AuthCard