import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../../components/PageHeader'
import Search from '../../components/Search'
import Categories from '../../components/explore/Categories'

const ExplorePage = () => {
  return (
    <SafeAreaView> 
      <ScrollView className='h-full bg-white px-3'> 
        <View >
          <PageHeader title='Explore'  containerStyles='!px-0' />
          <Search />
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView> 
  )
}

export default ExplorePage
