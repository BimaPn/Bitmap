import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MasonryFlashList } from '@shopify/flash-list'
import BackHeader from '../../../components/BackHeader'
import Post from '../../../components/Post'
import { useCategory } from '../../../components/providers/CategoryProvider'

const CategoryDetail = () => {
  const { category } = useCategory()
  return category && (
    <SafeAreaView className='h-full bg-white'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title={category.name} />
        <View>
          <View className='mx-3 mt-3 mb-4'> 
            <Text className='text-base'>{category.description}</Text>
          </View>
        {/*  <MasonryFlashList
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
          />*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CategoryDetail
