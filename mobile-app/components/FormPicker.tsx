import { Picker, PickerProps } from '@react-native-picker/picker'
import { Text, View } from 'react-native'

const FormPicker = (props:FormPickerType & PickerProps) => {
  const { 
    children,
    containerStyles,
    title
  }  = props
  return (
    <View  className={`space-y-2 ${containerStyles}`}> 
      <Text className="text-base text-semiDark font-pmedium">{title}</Text>
      <View className={`bg-semiLight h-14 pl-1 rounded-[14px]`}> 
        <Picker {...props}> 
          {children}
        </Picker>
      </View>
    </View>
  )
}

export const FormPickerItem = (props:{label: string, value: string | number}) => {
  return (  
    <Picker.Item 
    label={props.label} 
    value={props.value}
    />
  )
}

export default FormPicker
