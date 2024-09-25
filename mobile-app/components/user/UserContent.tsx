import { useState } from 'react';
import { View, Text, Animated, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import UserPosts from './UserPosts';
import UserCollections from './UserCollections';
import { icons } from '../../constants';

const { width } = Dimensions.get('window');

type ActiveButton =  "posts" | "collections"

const UserContent = ({ username }:{ username: string }) => {
  const [active, setActive] = useState<ActiveButton>('posts');

  return (
    <View>

      <Switch  
      active={active} 
      changeActive={(val) => setActive(val)} 
      />
      
      <View className='mt-4'> 
      
      {active === "posts" && ( 
        <UserPosts username={username} />
      )}

      {active === "collections" && ( 
        <UserCollections username={username} />
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
        <View className='h-[48px] border-b border-gray-300 flex-row relative'>
          <Animated.View 
          style={[{ transform: [{ translateX }] }]} 
          className="absolute -bottom-[1px] w-1/2 h-full border-b-2 border-black"  
          />
          <TouchableOpacity
          className={`flex-1 flex-row justify-center items-center gap-[3px]`}
            style={[active === 'posts' && styles.activeButton]}
            onPress={() => handleSwitch('posts')}
          >
            <Text 
            className={`${active === "posts" ? "text-black font-psemibold" : "text-gray-400 font-pmedium"} text-base`} 
            >Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
          className='flex-1 justify-center items-center'
            style={[active === 'collections' && styles.activeButton]}
            onPress={() => handleSwitch('collections')}
          >
            <Text 
            className={`${active === "collections" ? "text-black font-psemibold" : "text-gray-400 font-pmedium"} text-base`} 
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
