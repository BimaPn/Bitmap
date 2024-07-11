import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

type PrimaryButtonType= {  
  title: string
  handlePress?: () => void
  containerStyles?: string
  textStyles?: string
  isLoading?: boolean
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
}
const PrimaryButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  iconStart,
  iconEnd
}:PrimaryButtonType) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-black rounded-2xl min-h-[62px] flex flex-row justify-between items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <View className='w-[15%]'> 
      {iconStart}
      </View>

      <View> 
        <Text className={`text-white font-psemibold text-[17px] ${textStyles}`}>
          {title}
        </Text>
      </View>

      <View className='w-[15%]'> 
      {iconEnd}
      </View>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  )
}

export default PrimaryButton
