import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../../../components/PageHeader'
import Search from '../../../components/Search'
import Categories from '../../../components/explore/Categories'
import Collections from '../../../components/explore/Collections'

const ExplorePage = () => {
  return (
    <SafeAreaView> 
      <ScrollView className='h-full bg-white mb-6'> 
        <View className='px-3'>
          <PageHeader title='Explore'  containerStyles='!px-0' />
          <Search />
          <Categories />
        </View>
        <Collections />
      </ScrollView>
    </SafeAreaView> 
  )
}

export default ExplorePage
