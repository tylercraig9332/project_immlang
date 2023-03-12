/* eslint-disable react/jsx-no-literals */
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-4 max-w-xl">
          <button className="btn btn-primary btn-xs">{`😎`}</button>
          <button className="btn btn-secondary btn-sm">{`average`}</button>
          <button className="btn btn-info">{`medium`}</button>
          <button className="btn btn-accent btn-lg">{`large`}</button>
        </div>

        <div className="flex flex-col gap-2">
          <button className="btn btn-primary">{`primary`}</button>
          <button className="btn btn-secondary">{`secondary`}</button>
          <button className="btn btn-accent">{`accent`}</button>
          <button className="btn btn-info">{`info`}</button>
          <button className="btn btn-success">{`success`}</button>
          <button className="btn btn-warning">{`warning`}</button>
          <button className="btn btn-error">{`danger`}</button>
        </div>

        <div className="flex flex-col gap-2">
          <button className="btn btn-primary btn-outline">{`primary`}</button>
          <button className="btn btn-secondary btn-outline">{`secondary`}</button>
          <button className="btn btn-accent btn-outline">{`accent`}</button>
          <button className="btn btn-info btn-outline">{`info`}</button>
          <button className="btn btn-success btn-outline">{`success`}</button>
          <button className="btn btn-warning btn-outline">{`warning`}</button>
          <button className="btn btn-error btn-outline">{`danger`}</button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{`Shoes!`}
              <div className="badge badge-info">{`NEW`}</div></h2>
            <p>{`If a dog chews shoes whose shoes does he choose?`}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{`Buy Now`}</button>
            </div>
          </div>
        </div>

        <div className="alert alert-info shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            ><path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path></svg>
            <span>{`Info - New software update available.`}</span>
          </div>
        </div>

        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
              viewBox="0 0 24 24"
            ><path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>

        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
              viewBox="0 0 24 24"
            ><path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              /></svg>
            <span>Warning: Invalid email address!</span>
          </div>
        </div>

        <div className="alert shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            ><path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path></svg>
            <span>we use cookies for no reason.</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Deny</button>
            <button className="btn btn-sm btn-primary">Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
