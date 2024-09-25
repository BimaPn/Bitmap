import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../../../../components/BackHeader'
import UserItem from '../../../../../../components/user/UserItem'
import { useEffect, useState } from 'react'
import ApiClient from '../../../../../../api/axios/ApiClient'
import { useLocalSearchParams } from 'expo-router'
import { UserItemProps } from '../../../../../../types/auth'
import LoadingSpinner from '../../../../../../components/LoadingSpinner'
import NoResult from '../../../../../../components/NoResult'

const UserFollowers = () => {
  const { username } = useLocalSearchParams();

  const [users, setusers] = useState<UserItemProps[] | null>(null)

  useEffect(() => {
    const getFollowers = async () => {
      ApiClient().get(`/api/users/${username}/followers`)
      .then((res) => {
        const result = res.data.users
        setusers(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getFollowers()
  },[])

  return (
    <SafeAreaView className='bg-white h-full'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title={`Followers`} />

        {!users && (
          <LoadingSpinner />
        )}

        {(users && users.length < 1) && (
          <NoResult />
        )}

        {(users && users.length > 0) && (
          <View className='px-3 mt-3'> 
            {users.map((item, i) => ( 
              <UserItem 
              {...item}
              containerStyles='mb-4'
              key={i} 
              />
            ))}
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  )
}

export default UserFollowers