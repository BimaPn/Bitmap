import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

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
      className={`bg-primary rounded-[14px] min-h-[58px] flex flex-row justify-between items-center ${containerStyles} ${
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
