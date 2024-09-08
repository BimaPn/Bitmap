import { View } from 'react-native'
import DynamicImage from './DynamicImage'

type MediaType = { 
  uri: string 
  containerStyles?: string
}
const Media = ({uri, containerStyles}:MediaType) => {
    return (
    <View className={`flex-1 ${containerStyles}`}> 
      <DynamicImage
      isRounded
      uri={uri}
      />
    </View>

  );
}

export default Media
