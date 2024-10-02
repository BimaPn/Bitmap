import { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModal, BottomSheetScrollView, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Image } from 'react-native'
import { images } from '../../../constants';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';

const examples = [1,2,3,4,5,7,8,9,54,32,511,23, 45, 23]

const Saved = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['60%'], []);
  const { dismiss } = useBottomSheetModal();

  const [urlTarget, seturlTarget] = useState<null | string>(null)

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  },[])

  const renderBackdrop = useCallback((props: any) => (
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  ),[])
  
  const pathNavigate = (url: string) => {
    seturlTarget(url)
    dismiss()
  }

  const closeModal = (urlRedirect?: string) => {
    if(urlTarget) {
      router.replace(urlTarget)
    }else {
      router.back()
    }
  }

  return (
    <View>
        <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onDismiss={closeModal}
        >
         <BottomSheetScrollView stickyHeaderIndices={[0]}>

            <View className="pb-3 pt-2 -mt-1 bg-white">
              <Text className="font-pmedium text-lg text-center">Save to collection</Text>
            </View>

          <View className='gap-1 px-2'>
             {examples.map((item, i) => (
                <View key={i} className='flex-row gap-[10px] items-center'>
                  <Image source={images.user} className='w-11 h-11 rounded-lg' resizeMode='contain' />
                  <Text className='font-pmedium text-lg'>My secret</Text>
                </View>
             ))}
          </View>
        </BottomSheetScrollView>
        <TouchableOpacity 
        className='pb-3 pt-1 px-3 bg-white flex-row items-center gap-2 border border-gray-200'
        onPress={() => router.push("create/collection")} 
        >
          <View className='p-2 rounded-full bg-gray-100'>
            <Feather name="plus" size={24} color="black" />
          </View>
          <Text className='text-base font-pmedium'>Create a collection</Text>
        </TouchableOpacity>
        </BottomSheetModal>

    </View>
  )
}

export default Saved
