import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from "@gorhom/bottom-sheet"
import { router } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const Create = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { dismissAll } = useBottomSheetModal();

  const [urlTarget, seturlTarget] = useState<null | string>(null)

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  },[])

  const renderBackdrop = useCallback((props: any) => (
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  ),[])

  const pathNavigate = (url: string) => {
    seturlTarget(url)
    dismissAll()
  }

  const closeModal = (urlRedirect?: string) => {
    if(urlTarget) {
      router.replace(urlTarget)
    }else {
      router.back()
    }
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

            <View className="mb-4 mt-2">
              <Text className="font-pmedium text-lg text-center">Start creating now</Text>
            </View>

            <View className="flex-row justify-center gap-4 mb-6">
                <TouchableOpacity 
                className="gap-[6px]" 
                onPress={() => pathNavigate("create/post")}
                >
                  <View className="w-20 aspect-square justify-center items-center bg-gray-200 rounded-lg">
                    <MaterialIcons name="image" size={40} color="black" />
                  </View>
                  <Text className="text-center font-pmedium">Post</Text>
                </TouchableOpacity>

                <TouchableOpacity  
                className="gap-[6px]" 
                onPress={() => pathNavigate("create/collection")}
                > 
                  <View className="w-20 aspect-square justify-center items-center bg-gray-200 rounded-lg">
                     <Ionicons name="grid" size={38} color="black" /> 
                  </View>
                  <Text className="text-center font-pmedium">Collection</Text>
                </TouchableOpacity>
            </View>

          </BottomSheetView>
        </BottomSheetModal>
      </View>
  )
}

export default Create
