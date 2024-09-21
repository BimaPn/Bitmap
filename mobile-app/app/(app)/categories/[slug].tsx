import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MasonryFlashList } from '@shopify/flash-list'
import BackHeader from '../../../components/BackHeader'
import Post from '../../../components/Post'
import { useCategory } from '../../../components/providers/CategoryProvider'
import { useEffect, useState } from 'react'
import ApiClient from '../../../api/axios/ApiClient'
import { useLocalSearchParams } from 'expo-router'
import LoadingSpinner from '../../../components/LoadingSpinner'
import NoResult from '../../../components/NoResult'

const CategoryDetail = () => {
  const { slug } = useLocalSearchParams();

  const { category } = useCategory()
  const [posts, setposts] = useState<null | PostProps[]>(null)

  useEffect(() => {
    const getPosts = async () => {
      ApiClient().get(`/api/categories/${slug}/posts`)
      .then((res) => {
        const result = res.data.posts
        setposts(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }

    getPosts()
  },[])

  return category && (
    <SafeAreaView className='h-full bg-white'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title={category.name} />
        <View>
          <View className='mx-3 mt-3 mb-4'> 
            <Text className='text-base break-words'>{category.description}</Text>
          </View>
          {!posts && (
            <LoadingSpinner />
          )}

          {posts && posts.length < 1 && (
            <NoResult />
          )}

          {posts && posts.length > 0 && (
            <MasonryFlashList
            contentContainerStyle={{ 
              paddingHorizontal: 8,
              backgroundColor: "#FFFFFF",
            }}
            data={posts}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => ( 
              <Post
              post={item}
              containerStyles='m-1' 
              /> 
            )}
            estimatedItemSize={200}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CategoryDetail
