import { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import ApiClient from '../api/axios/ApiClient'



const FollowButton = ({ isFollowing, username } : {isFollowing: boolean, username: string}) => {
  const [follow, setfollow] = useState(isFollowing)
  const [loading, setloading] = useState(false)

  const followReq = async () => {
    ApiClient().post(`/api/users/${username}/follow`)
    .then((res) => {
      setfollow(true)
      setloading(false)
    })
    .catch((error) => {
      console.log(error.response)
    })

  }
  const unfollowReq = async () => {
    ApiClient().post(`/api/users/${username}/unfollow`)
    .then((res) => {
      setfollow(false)
      setloading(false)
    })
    .catch((error) => {
      console.log(error.response)
    })
  }
  const toggleFollow = async () => {
    setloading(true)
    if(follow){
      await unfollowReq()
    }else{
      await followReq()
    }
  }

  return (
    <TouchableOpacity
    activeOpacity={.8}
    onPress={toggleFollow}
    className={`w-[40%] h-12 rounded-2xl justify-center ${follow ? "bg-gray-200" : "bg-black"} ${loading && "opacity-50"}`}
    > 
      {!loading && (
        <Text className={`${!follow && "text-white"} font-pmedium text-center text-base`}>
        {follow ? "Followed" : "Follow"}
        </Text>
      )}

      {loading && (
        <ActivityIndicator
          animating={loading}
          color={follow ? "#000000" : "#fff"}
          size="small"
          className="ml-2 mx-auto text-center"
        />
      )}
    </TouchableOpacity>
  )
}

export default FollowButton
