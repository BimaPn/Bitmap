import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../components/BackHeader'
import { icons, images } from '../../../constants'
import FormField, { ControlFormField } from '../../../components/FormField'
import PrimaryButton from '../../../components/PrimaryButton'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as ImagePicker from 'expo-image-picker';
import { UpdateUserProps } from '../../../types/auth'
import ApiClient from '../../../api/axios/ApiClient'
import { useState } from 'react'
import Toast from 'react-native-toast-message'
import useAuth from '../../../hooks/useAuth'

const FormData = global.FormData

const ProfileEdit = () => {
  const { user } = useSelector((state : any) => state.auth);
  const { updateUser } = useAuth()
  const [loading, setloading] = useState(false)

  const { 
    control,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors }
  } = useForm<UpdateUserProps>({ 
    defaultValues: {
      avatar: null,
      name: user.name,
      username: user.username,
      email: user.email,
      bio: user.bio,
    }
  })

  const bio = watch("bio")
  const avatar = watch("avatar")
  
  const bioLength = bio ? bio.length : 0

  const onSubmit = handleSubmit( async (data) => { 

    setloading(true)

    const formData = new FormData()

    if(data.avatar) {

      formData.append("avatar", {
        uri: data.avatar.uri,
        type: data.avatar.mimeType,
        name: data.avatar.fileName
      } as unknown as Blob)
    }

    formData.append("name",data.name)
    if(data.bio) formData.append("bio", data.bio)
    formData.append("_method", "PUT")

    await ApiClient().post("/api/user/update", formData,{ 
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
    .then((res) => {
      updateUser(res.data.user)

      Toast.show({
        type: 'success',
        text1: 'User Updated!',
        text2: 'Your account has been updated.'
      });

      setloading(false)
    })
    .catch((err) => {
      const errorResponse = err.response.data.errors
      console.log(err.response.data)

      for(const error in errorResponse) {
        setError(`${error}` as any, { type: "custom", message: errorResponse[error][0] })
      }

      setloading(false)
    })
  }) 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setValue("avatar",result.assets[0] as any)
    }
  };

  return user && (
    <SafeAreaView className='h-full bg-white flex-1'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title='Edit profile' />

        <View className='flex-1 items-center relative mt-4'>
          <View className='relative'>

            {(!user.avatar) && (
              <Image
              source={avatar ? { uri: avatar.uri } : images.user}
              resizeMode='cover'
              className='w-32 h-32 rounded-full'
              />
            )}

            {(user.avatar) && ( 
              <Image
              source={{ uri: avatar ? avatar.uri : user.avatar }}
              resizeMode='cover'
              className='w-32 h-32 rounded-full'
              />
            )}

            <View className='h-fit absolute bottom-0 right-0'> 
               <TouchableOpacity 
               onPress={pickImage}
               className='bg-black/70 p-2 rounded-full'>
                <Image 
                source={icons.camera}
                resizeMode='contain'
                className='w-5 h-5'
                />
               </TouchableOpacity>
            </View>
          </View>
        </View>

        {errors.avatar?.message && (
          <View className='mt-4'>
            <Text className="text-red-500 font-pmedium text-center">{errors.avatar.message as string}</Text>
          </View>
        )}

        <View className='p-3 mt-3'> 
          <ControlFormField  
          name='name'
          control={control as any}
          formFieldProps={{ 
            title:'name',
            placeholder:'Your name',
            otherStyles: 'mb-4',
            errorMessage: errors.name?.message
          }}  
          rules={{ required: true, min:4 }}
          />
          <FormField
          title='Username' 
          value={user.username}
          placeholder='' 
          readOnly
          otherStyles='mb-4 opacity-40'
          />
          <FormField
          title='Email' 
          value={user.email}
          placeholder='' 
          readOnly
          otherStyles='mb-4 opacity-40'
          />

          <View className='relative'>
            <ControlFormField  
            name='bio'
            control={control as any}
            formFieldProps={{ 
              title:'bio',
              placeholder:'Your bio',
              otherStyles: 'mb-4',
              inputStyles: "!h-24 !items-start",
              inputClassName: "!h-full !pb-6 !pt-4",
              style: {
                textAlignVertical: "top"
              },
              numberOfLines: 10,
              multiline: true,
              bottomLabel: (
                <Text className='text-xs font-medium text-gray-600'>{bioLength} / 150</Text>
              ),
              errorMessage: errors.bio?.message
            }}  
            rules={{ required: true, min:4, max:150 }}
            />
          </View>

        </View>
      </ScrollView>
      <View className='items-end p-3'> 
       <View className='w-1/3'> 
        <PrimaryButton
        title='Edit' 
        handlePress={onSubmit}
        isLoading={loading}
        containerStyles='!w-fit !min-h-[50px]' textStyles='!text-[15px]'  
        />
       </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileEdit
