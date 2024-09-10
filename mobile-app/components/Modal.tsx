import { View, Text, TouchableOpacity, Modal as Template, Animated, Dimensions } from 'react-native'
import { useEffect, useRef } from 'react'

const screenHeight = Dimensions.get('window').height;

const Modal = ({ visible, onClose }:{ visible: boolean, onClose: () => void}) => {

  const translateY = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0, 
      useNativeDriver: false,
    }).start();
  }, [visible]); 

  return (
    <Template
    animationType='fade'
    transparent={true} 
    visible={visible} 
    onRequestClose={() => onClose}
    > 
      <TouchableOpacity
      className='w-full justify-center absolute top-0 bottom-0 left-0 right-0 bg-black/50' z-0
      activeOpacity={1}
      onPress={() => onClose()}
      >
      </TouchableOpacity>
        <Animated.View style={{ transform: [{ translateY }] }} className={`w-full absolute bottom-0 py-12 bg-white border z-1`}>
          <TouchableOpacity onPress={() => onClose()}>
            <Text>Hello World</Text>
          </TouchableOpacity>
        </Animated.View>


    </Template>
  )
}

export default Modal
