import { TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants'
import useAuth from '../hooks/useAuth'

const Logout = ({children}:{ children: React.ReactNode }) => {
  const { logout } = useAuth()
  return (
    <TouchableOpacity  
    onPress={() => logout()} 
    > 
    {children}
    </TouchableOpacity>
  )
}

export default Logout
