import { View, Text, TouchableOpacity } from 'react-native'
import Media from './Media'
import { Link, router } from 'expo-router'

const Post = (props: PostType & {containerStyles?: string}) => {
  const {
    id,
    image,
    containerStyles
  } = props

  const openDetail = () => {
    router.push(`/posts/${id}`)
  }
  return (
    <TouchableOpacity  
    onPress={openDetail}  
    className={`flex-1 ${containerStyles}`} 
    > 
      <Media uri={image} />
    </TouchableOpacity>
  )
}

export default Post
