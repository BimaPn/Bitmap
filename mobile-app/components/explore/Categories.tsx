import { Link, router } from 'expo-router'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import ApiClient from '../../api/axios/ApiClient'

const Categories = () => {
  const [categories, setcategories] = useState<CategoryProps[] | null>(null)
  useEffect(() => {
    const getCategories = async () => {
      ApiClient().get(`/api/categories/popular`)
      .then((res) => {
        setcategories(res.data.categories)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getCategories()
  },[])

  if(!categories) {
    return (
    <View>
      <Text>Loading...</Text>
    </View>
    )
  }
  return categories && (
    <View  className='mt-5'>
      <View className='flex-row items-center justify-between mb-[10px]'> 
        <Text className='text-lg font-pmedium'>Popular Categories</Text>
        <Link href={`/categories`} className='text-secondary text-[15px] font-pmedium'>See all</Link>
      </View>

      <View className='flex-1 flex flex-row flex-wrap -mx-1'>
        {categories.map((item, i) => ( 
        <View key={i} className='w-1/2 p-1'> 
          <CategoryPreview uri={item.thumbnail} name={item.name}  />
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
    <TouchableOpacity onPress={() => router.push(`categories/test`)} className={`relative ${containerStyles} rounded-2xl overflow-hidden`}>
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
    </TouchableOpacity>
  )
}


export default Categories
