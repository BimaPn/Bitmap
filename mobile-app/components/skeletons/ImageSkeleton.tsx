import { View } from "react-native"

const ImageSkeleton = () => {

  const getRandomHeight = () => {
    const minHeight = 150;
    const maxHeight = 300;
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  }

  return (
    <View>
      <View>

      </View>
      <View>
      </View>
    </View>
  )
}

export default ImageSkeleton
