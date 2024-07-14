import React from "react"
// import { BrowserRouter as useHistory } from "react-router-dom"
import PrimaryButton from "../Components/PrimaryButton"
import { icons, images } from "../constants"
import ImageContainer from "../Components/ImageContainer"

const Landing = () => {
  // const history = useHistory()

  return (
    <div className="bg-black w-full h-screen overflow-hidden justify-center items-center flex flex-col relative">
      {/* <img
          src={images.background_home}
          alt="Background"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        /> */}
      <div className="flex w-full h-full p-5 gap-[20px]">
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
      </div>

      <div className="w-full h-full bottom-0 absolute bg-gradient-to-b from-transparent to-primary"></div>

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
          <PrimaryButton
            title="Continue with email"
            textStyles="text-black"
            path={"/login"}
            iconStart={
              <img
                src={icons.email}
                alt="Email Icon"
                className="w-[24px] h-[24px] ml-6 -mt-[2px]"
                style={{ objectFit: "contain" }}
              />
            }
            containerStyles="w-full bg-white mb-[7px]"
          />

          <PrimaryButton
            title="Continue to home"
            textStyles="text-black"
            path={"/home"}
            iconStart={
              <img
                src={icons.email}
                alt="Email Icon"
                className="w-[24px] h-[24px] ml-6 -mt-[2px]"
                style={{ objectFit: "contain" }}
              />
            }
            containerStyles="w-full bg-white"
          />
        </div>
      </div>

      {/* StatusBar can be managed globally in index.html or equivalent */}
    </div>
  )
}

export default Landing
