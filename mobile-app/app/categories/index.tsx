import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../components/BackHeader'
import { categories } from '../../constants/images'
import { CategoryPreview } from '../../components/explore/Categories'

const CategoriesPage = () => {
  return (
   <SafeAreaView className='h-full bg-white'> 
    <BackHeader title='All categories' />
    <FlatList 
    data={categories}
    className='px-2 mt-4'
    numColumns={2}
    keyExtractor={(_, i) =>  `${i}`}
    renderItem={({ item }) => ( 
      <CategoryPreview uri={item.image} name={item.name} containerStyles='!flex-[0.5] m-1' />
    )}  
    />
   </SafeAreaView>
  )
}

export default CategoriesPage
