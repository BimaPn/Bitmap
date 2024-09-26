import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../components/BackHeader'
import BackButton from '../../../components/BackButton'
import { icons, images } from '../../../constants'
import { Link, router, useLocalSearchParams } from 'expo-router'
import CollectionPosts from '../../../components/CollectionPosts'
import ShareButton from '../../../components/collections/ShareButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react'
import ApiClient from '../../../api/axios/ApiClient'
import LoadingSpinner from '../../../components/LoadingSpinner'

const id = "9d19f55e-d0e7-41be-9c90-fa23eadfb4b6"

const CollectionDetail = () => {
  // const { id } = useLocalSearchParams();
  
  const [collection, setcollection] = useState<CollectionInfoProps | null>(null)

  useEffect(() => {
    const getCollection = async () => {
      ApiClient().get(`/api/collections/${id}/get`)
      .then((res) => {
        const result = res.data.collection
        setcollection(result)
      })
      .catch((err) => {
        console.log(err.response)
        router.back()
      })
    }

    getCollection()
    },[])

  return (
   <SafeAreaView className='h-full bg-white'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <Topbar />
        
        {!collection && (
          <LoadingSpinner />
        )}

        {collection && (
          <View className='px-4 mt-2'>

            <View className='gap-[10px]'>
              <Text className='text-xl font-pmedium'>{collection.name}</Text>
              <Text className='text-gray-900 leading-[22px]'>{collection.description}</Text>
            </View>

            <View className={`flex-row justify-between items-center ${collection.description && "mt-5"}`}>
              <View className='flex-row items-center gap-[6px]'>
                <Image 
                source={collection.creator.avatar ? { uri: collection.creator.avatar } : images.user}
                className='w-8 h-8 rounded-full'
                resizeMode='contain'
                />
                <View className='flex-row gap-1'>
                  <Text className='text-gray-600'>By</Text>
                  <Link href={`/(home)/users/${collection.creator.username}`} className='font-pmedium'>{collection.creator.name}</Link>
                </View>
              </View>
              <Text className='text-gray-600'>{collection.postCount} Posts</Text>
            </View>

          </View>
        )}

        <View className='px-3 mt-3'>
          <CollectionPosts collectionId={id} />
        </View>


      </ScrollView>
   </SafeAreaView>
  )
}

const Topbar = () => {
  return (
    <View className='flex-row justify-between items-center py-4 bg-white px-1'> 
      <View className='basis-1/3 flex-row justify-start'> 
        <BackButton />
      </View>
      <View className='basis-1/3'/> 
      <View className='basis-1/3 flex-row justify-end pr-3'> 
        <View className='mr-4'>
          <ShareButton /> 
        </View>

        <More />
      </View>
    </View>
  )
}

const More = () => {
  return (
    <TouchableOpacity
    activeOpacity={.8}
    >
    <Image 
    source={icons.more_dark}
    className='w-5 h-5'
    resizeMode='contain'
    />
    </TouchableOpacity>
  )
}

export default CollectionDetail
