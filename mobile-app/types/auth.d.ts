import { ImageSourcePropType } from "react-native"

interface AuthUser { 
  id: string
  username: string
  email: string
  avatar: string
  bio?: string
  access_token: string
}

type UpdateUserProps = {
  username: string
  email: string
  name: string
  bio?: string
  avatar: any | null
}
