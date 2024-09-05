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


const ProfileEdit = () => {
  const { user } = useSelector((state : any) => state.auth);

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

  const onSubmit = handleSubmit((data) => { 
    console.log(data)
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
            <Image
            source={{ uri: avatar ? avatar.uri : user.avatar }}
            resizeMode='cover'
            className='w-32 h-32 rounded-full'
            />
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

        <View className='p-3 mt-3'> 
          <ControlFormField  
          name='name'
          control={control as any}
          formFieldProps={{ 
            title:'name',
            placeholder:'Your name',
            otherStyles: 'mb-4',
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
              inputClassName: "!h-full !pb-6 ",
              style: {
                textAlignVertical: "top"
              },
              numberOfLines: 10,
              multiline: true,
            }}  
            rules={{ required: true, min:4, max:150 }}
            />
            <View className='absolute bottom-6 right-4'>
              <Text className='text-xs font-medium text-gray-600'>{bioLength} / 150</Text>
            </View>
          </View>

        </View>
      </ScrollView>
      <View className='items-end p-3'> 
       <View className='w-1/3'> 
        <PrimaryButton
        title='Edit' 
        handlePress={onSubmit}
        containerStyles='!w-fit !min-h-[50px]' textStyles='!text-[15px]'  
        />
       </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileEdit
