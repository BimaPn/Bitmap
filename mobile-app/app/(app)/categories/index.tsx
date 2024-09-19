import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../components/BackHeader'
import { CategoryPreview } from '../../../components/explore/Categories'
import { useEffect, useState } from 'react'
import ApiClient from '../../../api/axios/ApiClient'

const CategoriesPage = () => {
  const [categories, setcategories] = useState<CategoryProps[] | null>(null)

  useEffect(() => {
    const getCategories = async () => {
      ApiClient().get(`/api/categories/all`)
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
   <SafeAreaView className='h-full bg-white'> 
    <BackHeader title='All categories' />
    <FlatList 
    data={categories}
    className='px-2 mt-4'
    numColumns={2}
    keyExtractor={(_, i) =>  `${i}`}
    renderItem={({ item }) => ( 
      <CategoryPreview uri={item.thumbnail} name={item.name} containerStyles='!flex-[0.5] m-1' />
    )}  
    />
   </SafeAreaView>
  )
}

export default CategoriesPage
