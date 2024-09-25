import { View, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { MasonryFlashList } from '@shopify/flash-list';
import BackButton from '../../../../../components/BackButton';
import Search from '../../../../../components/Search';
import { useEffect, useState } from 'react';
import ApiClient from '../../../../../api/axios/ApiClient';
import NoResult from '../../../../../components/NoResult';
import LoadingSpinner from '../../../../../components/LoadingSpinner';
import Post from '../../../../../components/Post';

const Query = () => {
  const { query } = useLocalSearchParams();

  const [posts, setposts] = useState<PostProps[] | null>(null)

  useEffect(() => {
    setposts(null)
    const getData = async () => {
      ApiClient().get(`/api/posts/search?query=${query}`)
      .then((res) => {
        const result = res.data.posts
        setposts(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getData()
  },[query])

  return  (
    <SafeAreaView className="bg-white h-full">

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
      ListHeaderComponent={() => (
        <>
          <View className="flex-row mb-4 mt-10 pr-1">
            <BackButton containerStyles='!p-2 !mt-[0]'/> 
            <View className="flex-1">
              <Search initialQuery={query as string}/>
            </View>
          </View>
          {!posts && (
            <LoadingSpinner />
          )}
          {posts && posts.length < 1 && (
            <NoResult />
          )}
        </>
      )}
      estimatedItemSize={200}
    />

    </SafeAreaView>
  )
}

export default Query
