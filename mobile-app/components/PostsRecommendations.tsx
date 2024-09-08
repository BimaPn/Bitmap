import { MasonryFlashList } from '@shopify/flash-list'
import { imagesExample } from '../constants/images'
import Media from './Media'

const PostsRecommendations = () => {
  return (
    <MasonryFlashList
      contentContainerStyle={{ 
        backgroundColor: "#FFFFFF",
      }}
      data={imagesExample}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => ( 
        <Media uri={item.image} containerStyles='m-1' /> 
      )}
      estimatedItemSize={200}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default PostsRecommendations
