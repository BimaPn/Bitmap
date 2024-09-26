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
