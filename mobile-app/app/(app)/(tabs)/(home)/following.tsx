import { MasonryFlashList } from "@shopify/flash-list"
import Post from "../../../../components/Post"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import NoResult from "../../../../components/NoResult"
import ApiClient from "../../../../api/axios/ApiClient"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { View } from "react-native"

const Following = () => {
  const { user } = useSelector((state : any) => state.auth);

  const [posts, setposts] = useState<PostProps[] | null>(null)

  useEffect(() => {
    const getPosts = async () => {
      ApiClient().get(`/api/users/${user.username}/followings/posts`)
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

export default Following
