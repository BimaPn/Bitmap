import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet"
import { router } from "expo-router";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Text, View } from "react-native"

const Create = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  },[])

  const renderBackdrop = useCallback((props: any) => (
  <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  ),[])

  const closeModal = () => {
    router.back()
  }

  return (
    <View className='flex-1'>
        <BottomSheetModal
        onDismiss={closeModal}
        ref={bottomSheetModalRef}
        backdropComponent={renderBackdrop}
        enableDynamicSizing
        >
          <BottomSheetView className="flex-1 items-center">
            <View className="w-[400px] aspect-square">
            <Text>Test</Text>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
  )
}

export default Create
