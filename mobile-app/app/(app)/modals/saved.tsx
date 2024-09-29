import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native'

const Saved = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const [urlTarget, seturlTarget] = useState<null | string>(null)

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  },[])

  const renderBackdrop = useCallback((props: any) => (
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  ),[])
  return (
    <View className='flex-1'>
        <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={renderBackdrop}
        enableDynamicSizing
        >
          <BottomSheetView className="flex-1 items-center">

            <View className="mb-4 mt-2">
              <Text className="font-pmedium text-lg text-center">Saved post</Text>
            </View>

          </BottomSheetView>
        </BottomSheetModal>
      </View>
  )
}

export default Saved
