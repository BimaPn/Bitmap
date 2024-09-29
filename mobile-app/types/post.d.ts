type PostProps = {
  id: string
  title: string
  media: string
  description?: string
  creator: PostCreatorProps
  isLiked: boolean
}

type PostCreatorProps = {
  name: string
  username: string
  avatar: string
}

type PostPreviewProps = { 
  id: string
  media: string
}

type CategoryProps = {
  id: number
  name: string
  description: string
  slug: string
  thumbnail: string
}
