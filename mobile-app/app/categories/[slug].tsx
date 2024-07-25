import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../components/BackHeader'
import { MasonryFlashList } from '@shopify/flash-list'
import { imagesExample } from '../../constants/images'
import Post from '../../components/Post'

const CategoryDetail = () => {
  return (
    <SafeAreaView className='h-full bg-white'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title='Nature' />
        <View>
          <View className='mx-3 mt-3 mb-4'> 
            <Text className='text-base'>diverse flora & fauna, and  mesmerizing natural phenomena, immersing you in the great outdoors.</Text>
          </View>
          <MasonryFlashList
            contentContainerStyle={{ 
              paddingHorizontal: 8,
              backgroundColor: "#FFFFFF",
            }}
            data={imagesExample}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => ( 
              <Post
              id={item.id}
              image={item.image} 
              containerStyles='m-1' 
              /> 
            )}
            estimatedItemSize={200}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CategoryDetail
