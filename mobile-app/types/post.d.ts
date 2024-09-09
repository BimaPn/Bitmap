type PostProps = {
  id: string
  title: string
  media: string
  description?: string
  creator: PostCreatorProps
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
