import { Text, TouchableOpacity } from 'react-native'
import Media from './Media'
import { router } from 'expo-router'

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
      <Media uri={image} containerStyles='rounded-[15px]' />
    </TouchableOpacity>
  )
}

export default Post
