import { ImageSourcePropType } from "react-native"

interface AuthUser { 
  id: string
  name: string
  username: string
  email: string
  avatar: string
  bio?: string
  access_token: string
  statistic: UserStatisticProps
}

type UserStatisticProps = {
  posts: number,
  followers: number,
  followings: number
}

interface UserInfoProps extends Omit<AuthUser, "access_token"> {
  isFollowing: boolean
}

type UserItemProps = {
  name: string
  username: string
  avatar?: string
  isFollowing: boolean
}

type UpdateUserProps = {
  username: string
  email: string
  name: string
  bio?: string
  avatar: any | null
}
