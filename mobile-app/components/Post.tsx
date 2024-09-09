import { Text, TouchableOpacity } from 'react-native'
import Media from './Media'
import { router } from 'expo-router'

const Post = (props: PostPreviewProps & {containerStyles?: string}) => {
  const {
    id,
    media,
    containerStyles
  } = props
  const openDetail = () => {
    router.push(`/posts/${id}`)
  }
  return (
    <TouchableOpacity  
    activeOpacity={1}
    onPress={openDetail}  
    className={`flex-1 ${containerStyles}`} 
    > 
      <Media uri={media} containerStyles='rounded-[15px]' />
    </TouchableOpacity>
  )
}

export default Post
