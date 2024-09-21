import { MasonryFlashList } from '@shopify/flash-list'
import { imagesExample } from '../../constants/images'
import { useEffect, useState } from 'react'
import ApiClient from '../../api/axios/ApiClient'
import LoadingSpinner from '../LoadingSpinner'
import NoResult from '../NoResult'
import Post from '../Post'

const UserPosts = () => {
  const [posts, setposts] = useState<PostProps[] | null>(null)

  useEffect(() => {
    const getPosts = async () => {
      ApiClient().get(`/api/posts/auth`)
      .then((res) => {
        const posts = res.data.posts
        console.log(posts)
        setposts(posts)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
    getPosts()
  },[])

  if(!posts) {
    return <LoadingSpinner />
  }

  if(posts && posts.length < 1) {
    return <NoResult />
  }

  return posts && (
    <MasonryFlashList
      contentContainerStyle={{ 
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
      showsVerticalScrollIndicator={false}
    />
  )
}

export default UserPosts
