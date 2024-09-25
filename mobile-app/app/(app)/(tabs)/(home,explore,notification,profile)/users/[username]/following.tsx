import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../../../../components/BackHeader'
import UserItem from '../../../../../../components/user/UserItem'

const UserFollowing = () => {
  return (
    <SafeAreaView> 
      <ScrollView className='h-full bg-white' stickyHeaderIndices={[0]}> 
        <BackHeader title='25k Following' />

        <View className='px-3 mt-3'> 
          {[1,2,3,4,5,6,7,8].map((item) => ( 
            <UserItem containerStyles='mb-4' key={item} />
          ))}

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


export default UserFollowing 
