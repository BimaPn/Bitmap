import React from "react"
// import { images } from "../constants"
import { categories } from "../constants/images"

const ImageContainer = () => {
  return (
    <div className="flex flex-1 flex-col h-full gap-[20px]">
      {categories.map((category, i) => (
        <div key={i} className="w-full min-h-fit">
          <img
            src={category.image}
            alt="Background"
            className="w-full h-full rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageContainer
