import { Stack } from "expo-router"
import { createContext, useContext, useState } from "react"
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types"

type CommonRoutesProps = {
  layoutPath: string
}

const CommonRoutesContext = createContext<CommonRoutesProps | null>(null)

export const useCommonRoutes = () => useContext(CommonRoutesContext) as CommonRoutesProps

const CommonRoutesProvider = ({ layout, children, ...props }:{ layout: string, children: React.ReactNode }  
& NativeStackNavigatorProps) => {
  const [layoutPath, setlayoutPath] = useState(layout)
  return (
  <CommonRoutesContext.Provider value={{ layoutPath }}> 
    <Stack {...props}>
      <Stack.Screen name='users/[username]/index' options={{headerShown:false}} />
      <Stack.Screen name='users/[username]/followers' options={{headerShown:false}} />
      <Stack.Screen name='users/[username]/following' options={{headerShown:false}} />
    {children}
    </Stack>
  </CommonRoutesContext.Provider>
  )
}

export default CommonRoutesProvider
