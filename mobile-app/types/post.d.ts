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

type PostType = { 
  id: string | number
  image: string
}
