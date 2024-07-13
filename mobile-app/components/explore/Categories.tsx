import { Link } from 'expo-router'
import { View, Text, Image} from 'react-native'
import { categories } from '../../constants/images'
import { LinearGradient } from 'expo-linear-gradient'

const Categories = () => {
  return (
    <View  className='mt-5'>
      <View className='flex-row items-center justify-between mb-[10px]'> 
        <Text className='text-lg font-pmedium'>Popular Categories</Text>
        <Link href={`/test`} className='text-secondary text-[15px] font-pmedium'>See all</Link>
      </View>

      <View className='flex-1 flex flex-row flex-wrap -mx-1'>
        {categories.map((item, i) => ( 
        <View key={i} className='w-1/2 p-1'> 
          <CategoryPreview uri={item.image} name={item.name}  />
        </View>
        ))} 
      </View>
    </View>
  )
}

type CategoryPreviewType = { 
  uri: string
  name: string
  slug?: string
  containerStyles?: string
}

export const CategoryPreview = (props:CategoryPreviewType) => { 

  const {
    uri,
    name,
    slug,
    containerStyles
  } = props

  return( 
    <View className={`relative ${containerStyles} rounded-2xl overflow-hidden`}>
      <Image 
      source={{ uri }} 
      style={{ width:"100%", aspectRatio: 4/3 }} 
      resizeMode='cover'
      className='rounded-2xl'
      />
      <View className='absolute top-0 left-0 px-4 py-5 z-[1]'> 
        <Text className='text-base text-white font-psemibold'>{name}</Text>
      </View>
      <LinearGradient
      colors={['rgba(0,0,0,0.8)', 'transparent']}
      className='absolute top-0 left-0 right-0 h-[60%] z-0'
      />
    </View>
  )
}


export default Categories
