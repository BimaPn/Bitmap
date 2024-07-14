type TabIconType = {  
  icon: ImageSourcePropType
  activeIcon?: ImageSourcePropType
  resizeMode?: "contain" | "cover"
  focused: boolean
  showBorderBottom?: boolean
  iconStyles?: string
  containerStyles?: string
}

type PrimaryButtonType= {  
  title: string
  handlePress?: () => void
  containerStyles?: string
  textStyles?: string
  isLoading?: boolean
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
}

type FormFieldType = {  
  title: string
  value?: string
  placeholder: string
  handleChangeText?: (val: string) => void
  iconStart?: React.ReactNode
  otherStyles?: string
}

type FormPickerType={
  children: React.ReactNode
  containerStyles?: string
  title: string
}
