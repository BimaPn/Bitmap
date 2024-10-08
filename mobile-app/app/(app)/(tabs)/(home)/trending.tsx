import { MasonryFlashList } from '@shopify/flash-list';
import { imagesExample } from '../../../../constants/images';
import Post from '../../../../components/Post';
import { useEffect, useState } from 'react';
import ApiClient from '../../../../api/axios/ApiClient';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import NoResult from '../../../../components/NoResult';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Trending = () => {
  const [posts, setposts] = useState<PostProps[] | null>(null)

  useEffect(() => {
    const getPosts = async () => {
      ApiClient().get(`/api/posts/trending`)
      .then((res) => {
        const posts = res.data.posts
        setposts(posts)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getPosts()
  },[])

  return (
    <View className='h-full bg-white'>
      {!posts && (
      <LoadingSpinner />
      )}
      {posts && posts.length < 1 && (
        <NoResult />
      )}
      {posts && posts.length > 0 && (
      <MasonryFlashList
        contentContainerStyle={{ 
          paddingHorizontal: 12,
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

  )
}

export default Trending
