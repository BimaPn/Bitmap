import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images, { imagesExample } from '../../../constants/images'
import { MasonryFlashList } from '@shopify/flash-list';
import MasonryList from '../../../components/MasonryList';
import Media from '../../../components/Media';
import DynamicImage from '../../../components/DynamicImage';

const Trending = () => {
  return (
  <ScrollView> 

    <View className='flex-1'> 
    <DynamicImage uri={imagesExample[0].image}/>
    <DynamicImage uri={imagesExample[1].image}/>
    <DynamicImage uri={imagesExample[2].image}/>
    <Text>Fuck</Text>
    </View> 
  </ScrollView>


  )
}

export default Trending
