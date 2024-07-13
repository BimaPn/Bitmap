import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import { categories } from '../../constants/images'

const { width } = Dimensions.get('window');

const Collections = () => {
  return (
    <View className='mt-5 mb-8 pl-3'>
      <View className='flex-row items-center justify-between mb-[10px]'> 
        <Text className='text-lg font-pmedium'>Popular Collections</Text>
      </View>

      <View className='flex-1 flex flex-row flex-wrap -mx-1'>
      </View>
      <FlatList
      data={[1,2,3,4]} 
      horizontal
      keyExtractor={(_, i) => `${i}`}
      renderItem={({item}) => ( 
        <CollectionPreview />
      )}
      showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

const CollectionPreview = () => {
  return ( 
    <View style={{width: width*.8}} className='mr-4'>
      <View className='flex-1 flex-row justify-between items-center aspect-[16/10] rounded-2xl overflow-hidden space-x-[6px]'>
        <View className='w-1/2 h-full' >
          <Image source={{ uri: categories[0].image }} className='w-full h-full' resizeMode='cover' />
        </View>
        <View className='w-1/2 h-full space-y-[6px]'>
          <Image source={{ uri: categories[1].image }} className='w-full h-1/2' resizeMode='cover' />
          <Image source={{ uri: categories[2].image }} className='w-full h-1/2' resizeMode='cover' />
        </View> 
      </View>

      <View className='mt-2'>
        <Text className='font-pmedium text-base'>Beauty of Nature</Text>
        <Text className='text-netral text-[13px]'>55 Photos</Text>
      </View>

    </View>
  )
}

export default Collections
