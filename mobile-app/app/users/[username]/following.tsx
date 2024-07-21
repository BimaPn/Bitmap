import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../components/BackHeader'
import { images } from '../../../constants'

const following = () => {
  return (
    <SafeAreaView> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title='25k Following' />

        <View> 
          <View className='flex-row justify-between'  >
            <View className='flex-row items-center space-x-1'> 
              <Image source={images.user} className='w-7 h-7' resizeMode='cover' />
              <View> 
              <Text>Udin Sarwendah</Text>
              <Text>@udah22</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


export default following
