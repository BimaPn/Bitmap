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
  iconEnd?: React.ReactNode,
  disable?: boolean
}

type FormFieldType = {  
  title: string
  iconStart?: React.ReactNode
  otherStyles?: string
  inputStyles?: string
  placeholder?: string
  errorMessage?: string
  inputClassName?: string
}

type FormPickerType={
  children: React.ReactNode
  containerStyles?: string
  title: string
}


