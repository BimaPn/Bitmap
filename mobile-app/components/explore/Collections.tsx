import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import { categories } from '../../constants/images'
import { useEffect, useState } from 'react';
import ApiClient from '../../api/axios/ApiClient';
import LoadingSpinner from '../LoadingSpinner';
import NoResult from '../NoResult';
import CollectionItem from '../collections/CollectionItem';

const { width } = Dimensions.get('window');

const Collections = () => {

  const [collections, setcollections] = useState<CollectionItemProps[] | null>(null)

  useEffect(() => {
    const getCollections = async () => {
      ApiClient().get(`/api/collections/recommendations`)
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

  return (
    <View className='mt-6 mb-8 pl-3'>
      <View className='flex-row items-center justify-between mb-[10px]'> 
        <Text className='text-lg font-pmedium'>Collections For You</Text>
      </View>

      {!collections && (
        <LoadingSpinner />
      )}
      {collections && collections.length < 1 && (
        <NoResult />
      )}

      {collections && (
        <FlatList
        data={collections} 
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => ( 
          <View style={{width: width*.8}} className='mr-4'>
            <CollectionItem {...item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        />
      )}

    </View>
  )
}


export default Collections
