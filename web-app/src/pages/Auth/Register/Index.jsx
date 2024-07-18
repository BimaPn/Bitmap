import React from "react"
import { icons, images } from "../../../constants"
import ImageContainer from "../../../Components/ImageContainer"
import TitlePage from "../../../Components/TitlePage"
import FormField from "../../../Components/FormField"
import PrimaryButton from "../../../Components/PrimaryButton"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex">
      <div className="bg-black flex-1 w-full h-screen overflow-hidden justify-center items-center flex flex-col relative">
        <div className="flex w-full h-full p-5 gap-[10px]">
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
        </div>

        <div className="w-full h-full bottom-0 absolute bg-gradient-to-t from-50% from-primary to-transparent"></div>

        <div className="max-sm:w-full w-[60%] px-3 z-10 absolute overflow-auto">
          <div className="flex flex-col items-center">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white mb-6">
              <img
                src={images.logoSmall}
                alt="Logo"
                className="w-[60%] h-[60%]"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="space-y-3 mb-8 text-center">
              <p className="text-white font-semibold text-2xl">
                Discover thousands of <br /> Photos for your inspiration
              </p>
              <p className="text-gray-300 leading-[22px]">
                Share your passions, explore new ideas, and connect with amazing
                creators. Let’s get started.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex font-pmedium font-medium bg-white items-center justify-center">
        <div className="w-[350px] flex flex-col items-center justify-center">
          <TitlePage
            title="Register"
            textStyles="self-start text-primary text-2xl mb-4"
          />
          <FormField
            title="Username"
            placeholder="Enter your username"
            iconStart={
              <img src={icons.user} className="w-[26px] h-[26px] -mt-[6px]" />
            }
            otherStyles="mb-4 w-full"
          />
          <FormField
            title="Email"
            placeholder="Enter your email"
            iconStart={
              <img src={icons.email_input} className="w-[26px] h-[26px]" />
            }
            otherStyles="mb-4 w-full"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            iconStart={
              <img src={icons.lock_input} className="w-[26px] h-[26px] -mt-1" />
            }
            otherStyles="w-full"
          />

          <PrimaryButton
            title="Register"
            textStyles="text-white font-semibold"
            iconStart={
              <img
                src={icons.email}
                alt="Email Icon"
                className="w-[24px] h-[24px] ml-6 -mt-[2px]"
                style={{ objectFit: "contain" }}
              />
            }
            containerStyles="w-full bg-primary mt-8"
          />

          <h3 className="text-netral text-base mt-2">
            Already have an account?{" "}
            <Link
              to={`/login`}
              className="text-secondary font-pmedium text-[15px]"
            >
              Log In
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Register
