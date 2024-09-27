type CollectionInfoProps = {
  id: string
  name: string
  description?: string
  creator: CollectionCreatorProps
  postCount: number
}

type CollectionCreatorProps = {
  username: string
  name: string
  avatar: string
}

type CollectionItemProps = {
  id: string
  name: string
  posts_count: number
  posts: CollectionItemPostProps[]
}

type CollectionItemPostProps = {
  media: string
}
