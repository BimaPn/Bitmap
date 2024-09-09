import { MasonryFlashList } from '@shopify/flash-list';
import { imagesExample } from '../../../../constants/images';
import Post from '../../../../components/Post';
import { useEffect, useState } from 'react';
import ApiClient from '../../../../api/axios/ApiClient';

const Trending = () => {
  const [posts, setposts] = useState<PostPreviewProps[] | null>(null)

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
  return posts && (
    <MasonryFlashList
      contentContainerStyle={{ 
        paddingHorizontal: 12,
        backgroundColor: "#FFFFFF",
      }}
      data={posts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => ( 
        <Post
        id={item.id}
        media={item.media} 
        containerStyles='m-1' 
        /> 
      )}
      estimatedItemSize={200}
    />
  )
}

export default Trending
