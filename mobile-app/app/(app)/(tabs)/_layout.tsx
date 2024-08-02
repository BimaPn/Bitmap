import { Tabs, usePathname } from 'expo-router'
import { Text, View } from 'react-native'
import HomeHeader from '../../../components/HomeHeader'
import TabIcon from '../../../components/TabIcon'
import { icons, images } from '../../../constants'
import BackButton from '../../../components/BackButton'
import { StatusBar } from 'expo-status-bar'

const TabsLayout = () => {
  const hide = usePathname().includes("create")
  return (
  <> 
    <Tabs 
    screenOptions={{ 
      tabBarShowLabel: false,
      tabBarStyle: { 
        display: hide ? "none":"flex",
        backgroundColor: "#FFFFFF",
        height: 74,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        paddingBottom: 4,
        elevation: 0,
      }
    }}  
    > 
      <Tabs.Screen 
      name='home'
      options={{  
        title:"home",
        headerTitle: () => ( 
          <HomeHeader />
        ),
        headerTitleAlign:"center",
        headerStyle: {
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={icons.home}
            activeIcon={icons.home_active}
            focused={focused}
          />
        ),
      }}  
      />

      <Tabs.Screen 
      name='explore'
      options={{  
        title:"explore",
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={icons.search}
            focused={focused}
          />
        ),
      }}  
      />

      <Tabs.Screen 
      name='create'
      options={{  
        title:"create",
        headerStyle: {
          elevation: 0,
        },
        headerTitleAlign: "center",
        headerTitle:() => <Text className='font-pmedium text-base'>Create post</Text>,
        headerLeft:() => (  
         <BackButton /> 
        ),
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={icons.create}
            focused={focused}
            iconStyles='!w-12 !h-12'
            showBorderBottom={false}
          />
        ),
      }}  
      />

      <Tabs.Screen 
      name='notification'
      options={{  
        title:"notification",
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={icons.notification}
            activeIcon={icons.notification_active}
            focused={focused}
          />
        ),
      }}  
      />

      <Tabs.Screen 
      name='profile'
      options={{  
        title:"profile",
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={images.user}
            focused={focused}
            resizeMode='cover'
            showBorderBottom={false}
            iconStyles={`rounded-full !w-[30px] !h-[30px]`}
            containerStyles={focused ? "border border-black p-[1px] rounded-full":""}
          />
        ),
      }}  
      />
    </Tabs>

    <StatusBar backgroundColor="#FFFFFF" style="dark" />
  </>
  )
}

export default TabsLayout 
