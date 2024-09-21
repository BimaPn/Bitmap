import { View, ActivityIndicator } from 'react-native'

const LoadingSpinner = () => {
  return (
    <View className='py-10'>
      <ActivityIndicator size={35} color={`gray`} />
    </View>
  )
}

export default LoadingSpinner
