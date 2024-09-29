import { TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants'
import { useState } from 'react'
import ApiClient from '../api/axios/ApiClient'

const LikeButton = ({ isLiked, postId }: { isLiked: boolean, postId: string }) => {
  const [like, setlike] = useState(isLiked)
  const [loading, setloading] = useState(false)

  const likeReq = async () => {
    ApiClient().post(`/api/posts/${postId}/like`)
    .then((res) => {
      setlike(true)
      setloading(false)
    })
    .catch((error) => {
      console.log(error.response)
    })

  }
  const unlikeReq = async () => {
    ApiClient().post(`/api/posts/${postId}/unlike`)
    .then((res) => {
      setlike(false)
      setloading(false)
    })
    .catch((error) => {
      console.log(error.response)
    })
  }
  const toggleFollow = async () => {
    setloading(true)
    if(like){
      await unlikeReq()
    }else{
      await likeReq()
    }
  }
  return (
    <TouchableOpacity 
    activeOpacity={.8}
    onPress={toggleFollow}
    disabled={loading}
    > 
      <Image source={like ? icons.like_fill : icons.like} className='w-[25px] h-[25px] ml-[2px]' resizeMode='contain' />
    </TouchableOpacity>
  )
}

export default LikeButton
