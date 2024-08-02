import { View, Text } from 'react-native'
import { Provider } from 'react-redux'

const RootProvider = ({children}:{children: React.ReactNode}) => {

  return (
    <>
      {children}
    </>

  )
}

export default RootProvider
