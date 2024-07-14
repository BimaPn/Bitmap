import React from "react"
import PrimaryButton from "../../../Components/PrimaryButton"

const Login = () => {
  return (
    <div className="h-screen border ">
      <div className="w-full flex-col gap-5 h-full flex justify-center items-center px-3">
        <p>login page</p>
        <PrimaryButton title="Log In" containerStyles="" />
      </div>
    </div>
  )
}

export default Login
