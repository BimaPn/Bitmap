import { router } from 'expo-router'
import { createContext, useContext, useState } from 'react'
import { View, Text } from 'react-native'

type DetailPostProps = {
  post: null | PostProps
  setDetailPost: (post: PostProps) => void
}

const DetailPostContext = createContext<DetailPostProps | null>(null)

export const useDetailPost = () => useContext(DetailPostContext) as DetailPostProps

const DetailPostProvider = ({ children }: { children: React.ReactNode }) => {
  const [post, setpost] = useState<PostProps | null>(null)

  const setDetailPost = (postTarget: PostProps) => {
    setpost(postTarget)
    router.push(`/posts/${postTarget.id}`)
  }

  return (
  <DetailPostContext.Provider value={{
    post,
    setDetailPost
  }}> 
  {children}
  </DetailPostContext.Provider>
  )
}

export default DetailPostProvider
