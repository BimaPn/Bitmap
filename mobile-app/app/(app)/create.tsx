import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet"
import { useMemo, useRef } from "react";
import { Text, View } from "react-native"

const create = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <View className='flex-1'>
           <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
        >
          <BottomSheetView className="flex-1 items-center">
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
  )
}

export default create
