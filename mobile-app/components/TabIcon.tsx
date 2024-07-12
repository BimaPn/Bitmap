import { View, Image } from "react-native";

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

export default TabIcon
