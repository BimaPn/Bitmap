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
