import { Link } from 'expo-router'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import ApiClient from '../../api/axios/ApiClient'
import LoadingSpinner from '../LoadingSpinner'
import { useCategory } from '../providers/CategoryProvider'

const Categories = () => {
  const [categories, setcategories] = useState<CategoryProps[] | null>(null)
  useEffect(() => {
    const getCategories = async () => {
      ApiClient().get(`/api/categories/popular`)
      .then((res) => {
        const result = res.data.categories
        setcategories(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getCategories()
  },[])

  return (
    <View className='w-full mt-5' style={{ aspectRatio: 4/3.5 }}>
      <View className='flex-row items-center justify-between mb-[10px]'> 
        <Text className='text-lg font-pmedium'>Popular Categories</Text>
        <Link href={`/categories`} className='text-secondary text-[15px] font-pmedium'>See all</Link>
      </View>
      <View className='flex-1 flex flex-row flex-wrap -mx-1'>
        {categories && categories.map((item) => ( 
        <View key={item.slug} className='w-1/2 p-1'> 
          <CategoryPreview category={item}  />
        </View>
        ))} 
      </View>
    </View>
  )
}

type CategoryPreviewType = { 
  category: CategoryProps
  containerStyles?: string
}

export const CategoryPreview = ({category, containerStyles}: CategoryPreviewType) => { 

  const {
    slug,
    name,
    thumbnail
  } = category
  const { setCategory } = useCategory()

  return( 
    <TouchableOpacity 
    onPress={() => setCategory(category)} 
    className={`relative ${containerStyles} rounded-2xl w-full aspect-[4/3] overflow-hidden`}
    >
      <Image 
      source={{ uri: thumbnail, cache: 'force-cache' }} 
      resizeMode='cover'
      className='w-full h-full rounded-2xl'
      />
      <View className='absolute top-0 left-0 px-4 py-5 z-[1]'> 
        <Text className='text-base text-white font-psemibold'>{name}</Text>
      </View>
      <LinearGradient
      colors={['rgba(0,0,0,0.8)', 'transparent']}
      className='absolute top-0 left-0 right-0 h-[60%] z-0'
      />
    </TouchableOpacity>
  )
}


export default Categories
