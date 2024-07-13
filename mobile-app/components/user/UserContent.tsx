import { useState } from 'react';
import { View, Text, Animated, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import UserPosts from './UserPosts';
import UserCollections from './UserCollections';

const { width } = Dimensions.get('window');

type ActiveButton =  "posts" | "collections"

const UserContent = () => {
  const [active, setActive] = useState<ActiveButton>('posts');

  return (
    <View>

      <Switch  
      active={active} 
      changeActive={(val) => setActive(val)} 
      />
      
      <View className='mt-5'> 

      {active === "posts" && ( 
        <UserPosts />
      )}

      {active === "collections" && ( 
        <UserCollections />
      )}

      </View>


    </View>
  )
}

type SwitchButton = { 
  active: ActiveButton, 
  changeActive: (val:ActiveButton)=>void
}

const Switch = (props:SwitchButton) => { 
  const { 
    active,
    changeActive
  } = props

  const [translateX] = useState(new Animated.Value(0));

  const handleSwitch = (type: ActiveButton) => {
    changeActive(type)
    Animated.spring(translateX, {
      toValue: type === 'posts' ? 0 : (width * 0.5) - 20,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };
  return ( 
      <View className='flex-1 px-2'>
        <View className='h-[60px] bg-gray-200 rounded-xl flex-row relative'>
          <Animated.View 
          style={[{ transform: [{ translateX }] }]} 
          className="absolute w-1/2 h-full rounded-xl bg-white border border-gray-300"  
          />
          <TouchableOpacity
          className={`flex-1 justify-center items-center`}
            style={[active === 'posts' && styles.activeButton]}
            onPress={() => handleSwitch('posts')}
          >
            <Text 
            className={`${active === "posts" ? "text-secondary" : "text-gray-500"} font-psemibold`} 
            >Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
          className='flex-1 justify-center items-center'
            style={[active === 'collections' && styles.activeButton]}
            onPress={() => handleSwitch('collections')}
          >
            <Text 
            className={`${active === "collections" ? "text-secondary" : "text-gray-500"} font-psemibold`} 
            >Collections</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: 'transparent',
  },
});

export default UserContent
