import { useEffect, useState } from "react"
import ApiClient from "../../api/axios/ApiClient"
import LoadingSpinner from "../LoadingSpinner"
import NoResult from "../NoResult"
import { View } from "react-native"
import { MasonryFlashList } from "@shopify/flash-list"
import CollectionItem from "../collections/CollectionItem"

const CollectionSearch = ({ query }:{ query: string }) => {
  const [collections, setcollections] = useState<CollectionItemProps[] | null>(null)

  useEffect(() => {
    const getCollections = async () => {
      ApiClient().get(`/api/collections/search?query=${query}`)
      .then((res) => {
        const result = res.data.collections
        setcollections(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getCollections()
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

export default CollectionSearch
