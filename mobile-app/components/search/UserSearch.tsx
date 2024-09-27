import { View} from 'react-native'
import React, { useEffect, useState } from 'react'
import ApiClient from '../../api/axios/ApiClient'
import { UserItemProps } from '../../types/auth'
import UserItem from '../user/UserItem'
import LoadingSpinner from '../LoadingSpinner'
import NoResult from '../NoResult'

const UserSearch = ({ query }:{ query: string }) => {
    const [users, setusers] = useState<UserItemProps[] | null>(null)

  useEffect(() => {
    const getUsers = async () => {
      ApiClient().get(`/api/users/search/get?query=${query}`)
      .then((res) => {
        const result = res.data.users
        setusers(result)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    }
    getUsers()
  },[])

  if(!users) {
    return <LoadingSpinner />
  }

  if(users && users.length < 1) {
    return <NoResult />
  }

  return users && (
    <View>
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
    </View>
  )
}

export default UserSearch
