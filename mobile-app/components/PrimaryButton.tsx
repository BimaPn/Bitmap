import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

const PrimaryButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  iconStart,
  iconEnd,
  disable
}:PrimaryButtonType) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary rounded-[14px] min-h-[58px] flex flex-row justify-between items-center ${containerStyles} ${
        (disable || isLoading) ? "opacity-50" : ""
      }`}
      disabled={isLoading || disable}
    >
      {!isLoading && (
        <View className='w-[15%]'> 
        {iconStart}
        </View>
      )}

      
      {!isLoading && ( 
        <View> 
          <Text className={`text-white font-psemibold text-[17px] ${textStyles}`}>
            {title}
          </Text>
        </View>
      )}


      {!isLoading && (
        <View className='w-[15%]'> 
        {iconEnd}
        </View>
      )}

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2 mx-auto text-center"
        />
      )}
    </TouchableOpacity>
  )
}

export default PrimaryButton
