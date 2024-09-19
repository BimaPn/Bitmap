import { View } from "react-native"


const colors = ["rgb(156 163 175)", "rgb(248 113 113)", "rgb(74 222 128)", "rgb(96 165 250)"]

const ImageSkeleton = () => {

  const getRandomHeight = () => {
    const minHeight = 150;
    const maxHeight = 300;
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  }

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 4)

    return colors[randomIndex]
  }

  return (
    <View style={{ 
      width: "100%", 
      height: getRandomHeight(),
      backgroundColor: getRandomColor()
    }} 
    className="rounded-lg"
    >
    </View>
  )
}

export default ImageSkeleton
