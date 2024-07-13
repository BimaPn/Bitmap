import { View, Text } from 'react-native'

type PageHeaderType = { 
  title: string
  containerStyles?: string
  titleStyles?: string
}

const PageHeader = (props:PageHeaderType) => {

  const { 
    title,
    containerStyles,
    titleStyles
  } = props

  return (
    <View className={`flex-1 p-3 ${containerStyles}`}>
      <Text className={`font-psemibold text-xl ${titleStyles}`}>{title}</Text>
    </View>
  )
}

export default PageHeader
