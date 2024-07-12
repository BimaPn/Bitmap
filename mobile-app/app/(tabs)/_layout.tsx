import { Tabs } from 'expo-router'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { icons, images } from '../../constants'

type TabIconType = {  
  icon: ImageSourcePropType
  activeIcon?: ImageSourcePropType
  resizeMode?: "contain" | "cover"
  focused: boolean
  showBorderBottom?: boolean
  iconStyles?: string
  containerStyles?: string
}

const TabIcon = ({ icon, activeIcon, focused, resizeMode, showBorderBottom=true, iconStyles, containerStyles }:TabIconType) => {
  return (
    <View className={`flex items-center justify-center gap-2`}>
      <View className={`relative ${containerStyles}`}> 
        {!activeIcon && (  
          <Image
            source={icon}
            resizeMode={resizeMode ?? "contain"}
            className={`w-[26px] h-[26px] ${iconStyles}`}
          />
        )}

        {(activeIcon && !focused) && (  
          <Image
            source={icon}
            resizeMode={resizeMode ?? "contain"}
            className={`w-[26px] h-[26px] ${iconStyles}`}
          />
        )}

        {(activeIcon && focused) && ( 
          <Image
            source={activeIcon}
            resizeMode={resizeMode ?? "contain"}
            className={`w-[26px] h-[26px] ${iconStyles}`}
          />
        )}

        {(focused && showBorderBottom) && (  
          <View className='absolute -bottom-[10px] left-0 right-0 flex-row justify-center'> 
            <View className='w-[70%] h-[3px] rounded-full bg-black' />
          </View> 
        )}
      </View>
      


     </View>
  );
};


const TabsLayout = () => {
  return (
  <> 
    <Tabs 
    screenOptions={{ 
      tabBarShowLabel: false,
      tabBarStyle: { 
        backgroundColor: "#FFFFFF",
        height: 74,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        paddingBottom: 4
      }
    }}  
    > 
      <Tabs.Screen 
      name='home'
      options={{  
        title:"home",
        headerShown: false,
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
      name='search'
      options={{  
        title:"search",
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
        headerShown: false,
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
  </>
  )
}

export default TabsLayout 
