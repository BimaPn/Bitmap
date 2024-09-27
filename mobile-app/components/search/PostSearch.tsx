import { MasonryFlashList } from "@shopify/flash-list"
import Post from "../Post"
import { useEffect, useState } from "react"
import ApiClient from "../../api/axios/ApiClient"
import LoadingSpinner from "../LoadingSpinner"
import NoResult from "../NoResult"

const PostSearch = ({ query }: { query: string }) => {

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
    />
  )
}

export default PostSearch
