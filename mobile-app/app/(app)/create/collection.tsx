import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../../components/BackButton';
import { ControlFormField } from '../../../components/FormField';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../../components/PrimaryButton';
import ApiClient from '../../../api/axios/ApiClient';
import Toast from 'react-native-toast-message';

const collection = () => {
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

            <View className="mt-2 mb-3">
                <Text className="font-pmedium text-lg text-center">Create collection</Text>
            </View>

            <FormCreate navigate={(id) => pathNavigate(`/collections/${id}`)} />

          </BottomSheetView>
        </BottomSheetModal>
      </View>
  )
}

const FormCreate = ({ navigate }: { navigate: (id: string) => void }) => {
  const { 
    control,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors }
  } = useForm({ 
    defaultValues: {
      name: "",
      description: null,
    }
  })

  const [loading, setloading] = useState(false)

  const {name } = watch() as any

  const disableSubmit = () => {
    return name.length < 2
  }

  const submitData = handleSubmit( async (data) => { 
    setloading(true)

    await ApiClient().post("/api/collections/create", data)
    .then((res) => {
      const collectionId = res.data.collectionId

      Toast.show({
        type: 'success',
        text1: 'Collection created!',
        text2: 'Successfully created a collection!'
      });

      navigate(collectionId)
    })
    .catch((err) => {
      // const errorResponse = err.response.data.errors
      // console.log(err.response)
      //
      // for(const error in errorResponse) {
      //   setError(`${error}` as any, { type: "custom", message: errorResponse[error][0] })
      // }
      console.log(err.response)

      setloading(false)
    })
  }) 

  return (
    <View className='px-3 pb-3'> 
      <ControlFormField
      name='name'
      control={control as any}
      formFieldProps={{ 
        title:'Name',
        placeholder:'Add a title',
        otherStyles: 'mb-4',
        errorMessage: errors.name?.message
      }}  
      rules={{ required: true, min:4 }}
      />
      <ControlFormField  
      name='description'
      control={control as any}
      formFieldProps={{ 
        title:'Description (optional)',
        placeholder:'Add a description',
        otherStyles: 'mb-4',
        inputStyles: "!h-24 !items-start",
        inputClassName: "!h-full !pb-6 !pt-4",
        style: {
          textAlignVertical: "top"
        },
        numberOfLines: 10,
        multiline: true,
        errorMessage: errors.description?.message
      }}  
      />

      <View className='items-end mt-[10px]'>
        <View className='w-1/3'> 
          <PrimaryButton  
          title='Create' 
          containerStyles='!w-fit !min-h-[50px]' 
          textStyles='!text-[15px]' 
          disable={disableSubmit()}
          isLoading={loading}
          handlePress={submitData} 
          />
        </View>
      </View>

    </View>
  )
}

export default collection
