import { View, Text, ImageSourcePropType, Image, StyleSheet } from 'react-native'

type MediaType = { 
  source: ImageSourcePropType
  containerStyles?: string
}
const Media = ({source, containerStyles}:MediaType) => {
    return (
    <View  className='border'> 

      <Image
        source={source}
        className='w-full flex-1'
        resizeMode="contain"
      />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection:"row"
  },
  image: {
    width:28
  },
});

export default Media
