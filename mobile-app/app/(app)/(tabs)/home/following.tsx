import { MasonryFlashList } from "@shopify/flash-list"
import { imagesExample } from "../../../../constants/images"
import Post from "../../../../components/Post"

const Following = () => {
  return (
    <MasonryFlashList
      contentContainerStyle={{ 
        paddingHorizontal: 8,
        backgroundColor: "#FFFFFF",
      }}
      data={imagesExample}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => ( 
        <Post
        id={item.id}
        image={item.image} 
        containerStyles='m-1' 
        /> 
      )}
      estimatedItemSize={200}
    />
  )
}

export default Following
