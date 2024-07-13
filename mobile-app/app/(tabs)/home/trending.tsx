import { imagesExample } from '../../../constants/images'
import { MasonryFlashList } from '@shopify/flash-list';
import Media from '../../../components/Media';
import DynamicImage from '../../../components/DynamicImage';

const Trending = () => {
  return (
    <MasonryFlashList
      contentContainerStyle={{ 
        paddingHorizontal: 12,
        backgroundColor: "#FFFFFF",
      }}
      data={imagesExample}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => ( 
        <Media uri={item.image} containerStyles='m-1' /> 
      )}
      estimatedItemSize={200}
    />
  )
}

export default Trending
