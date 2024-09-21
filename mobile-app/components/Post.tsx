import { Text, TouchableOpacity } from 'react-native'
import Media from './Media'
import { router } from 'expo-router'
import { useDetailPost } from './providers/DetailPostProvider'

const Post = ({post, containerStyles}:{post: PostProps, containerStyles?: string}) => {

  const { setDetailPost } = useDetailPost()

  const openDetail = () => {
    setDetailPost(post)
  }

  return (
    <TouchableOpacity  
    activeOpacity={1}
    onPress={openDetail}  
    className={`flex-1 ${containerStyles}`} 
    > 
      <Media uri={post.media} containerStyles='rounded-[15px]' />
    </TouchableOpacity>
  )
}

export default Post
