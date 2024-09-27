import { MasonryFlashList } from '@shopify/flash-list'
import { imagesExample } from '../../constants/images'
import Media from '../Media'
import CollectionItem from '../collections/CollectionItem'
import { View } from 'react-native'
import { useEffect, useState } from 'react'
import ApiClient from '../../api/axios/ApiClient'
import LoadingSpinner from '../LoadingSpinner'
import NoResult from '../NoResult'

const UserCollections = ({ username }:{ username: string }) => {
  const [collections, setcollections] = useState<CollectionItemProps[] | null>(null)

  useEffect(() => {
    const getUserCollections = async () => {
      ApiClient().get(`/api/users/${username}/collections`)
      .then((res) => {
        const result = res.data.collections
        setcollections(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getUserCollections()
    },[])

  if(!collections) {
    return <LoadingSpinner />
  }

  if(collections && collections.length < 1) {
    return <NoResult />
  }

  return collections && (
    <View>
    <MasonryFlashList
      contentContainerStyle={{ 
        backgroundColor: "#FFFFFF",
        
      }}
      data={collections}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => ( 
      <View className='m-[6px] mb-3'>
        <CollectionItem {...item} />
      </View>
      )}
      estimatedItemSize={200}
      showsVerticalScrollIndicator={false}
    />

    </View>
  )
}

export default UserCollections


