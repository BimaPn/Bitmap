import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { imagesExample } from '../../constants/images';
import DynamicImage from '../../components/DynamicImage';

const PostDetail = () => {
  const { query } = useLocalSearchParams();
  const [post, setpost] = useState<PostType | undefined>(imagesExample.find((post) => post.id === query as string))
  
  if(!post) return null

  return (
    <SafeAreaView> 
      <DynamicImage uri={post.image} />
    </SafeAreaView>
  )
}

export default PostDetail
