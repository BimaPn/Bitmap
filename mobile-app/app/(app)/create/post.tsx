import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import FormField, { ControlFormField } from '../../../components/FormField'
import { icons } from '../../../constants'
import FormPicker, { FormPickerItem } from '../../../components/FormPicker'
import PrimaryButton from '../../../components/PrimaryButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../components/BackHeader'
import { Controller, useForm } from 'react-hook-form'
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import DynamicImage from '../../../components/DynamicImage'
import ApiClient from '../../../api/axios/ApiClient'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'

const Create = () => {
  const [categories, setcategories] = useState<CategoryProps[] | null>(null)

  useEffect(() => {
    const getCategories = async () => {
      ApiClient().get(`/api/categories/get`)
      .then((res) => {
        const result = res.data.categories
        setcategories(result)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }

    getCategories()

  },[])

  if(!categories) return (
    <View>
      <Text>Loading ...</Text>
    </View>
  )

  return <CreatePost categories={categories} />
}

const CreatePost = ({categories}:{categories: CategoryProps[]}) => {

  const { 
    control,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors }
  } = useForm({ 
    defaultValues: {
      title: "",
      description: null,
      category_id: categories[0].id,
      media: null
    }
  })

  const [loading, setloading] = useState(false)

  const {media, title, description, category_id} = watch() as any

  const disableSubmit = () => {
    return !media || title.length < 1 || !category_id 
  }

  useEffect(() => {
    pickImage()
  },[])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setValue("media",result.assets[0] as any)
    }
  };

  const submitData = handleSubmit( async (data) => { 
    setloading(true)

    const formData = new FormData()

    const media = data.media as any
    const description = data.description as any

    if(media) {
      formData.append("media", {
        uri: media.uri,
        type: media.mimeType,
        name: media.fileName
      } as unknown as Blob)
    }

    formData.append("title",data.title)
    formData.append("category_id",data.category_id as any)

    if(description && description.length > 0) {
      formData.append("description", description)
    }

    await ApiClient().post("/api/posts/create", formData,{ 
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
    .then((res) => {
      Toast.show({
        type: 'success',
        text1: 'Post Created!',
        text2: 'Successfully created a post!'
      });

      router.push("home/trending")
    })
    .catch((err) => {
      const errorResponse = err.response.data.errors
      console.log(err.response)

      for(const error in errorResponse) {
        setError(`${error}` as any, { type: "custom", message: errorResponse[error][0] })
      }

      setloading(false)
    })
  }) 

  return (
    <SafeAreaView className='h-full bg-white'> 
     <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title='Create Post' />

        <View className='flex-1 items-center relative mt-4'>
          <View className='relative'>
            <TouchableOpacity onPress={pickImage} className='absolute top-0 right-0 z-[2] p-2'> 
              <View className='bg-black/50 w-7 h-7 items-center justify-center rounded-full'> 
                <Image source={icons.edit_light} className='w-[65%] h-[65%]' resizeMode='contain' />
              </View> 
            </TouchableOpacity>

            {media && (
              <View className='w-1/2'> 
              <DynamicImage uri={media.uri} isRounded />
              </View>
            )}

            {!media && (
              <View className='w-[50%] aspect-[4/3] bg-gray-300 rounded-xl items-center justify-center'>
                <MaterialIcons name="image" size={65} color={"gray"} />
              </View>
            )}
            
          </View>
        </View>

        <View className='p-3 mt-3'> 
          <ControlFormField
          name='title'
          control={control as any}
          formFieldProps={{ 
            title:'title',
            placeholder:'Add a title',
            otherStyles: 'mb-4',
            errorMessage: errors.title?.message
          }}  
          rules={{ required: true, min:4 }}
          />
          <ControlFormField  
          name='description'
          control={control as any}
          formFieldProps={{ 
            title:'description',
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

          <Controller
          name='category_id'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormPicker
            title='Category' 
            selectedValue={value ?? categories[0].id}
            onValueChange={(val) => onChange(val)}
            > 
              {categories.map((item) => (
                <FormPickerItem 
                key={item.slug} 
                label={item.name} 
                value={item.id} 
                />
              ))}

              <FormPickerItem label='Nature' value={2} />
              <FormPickerItem label='Tecnologies' value={3} />
            </FormPicker>
          )}
          />

        </View>

     </ScrollView>
     <View className='items-end p-3'> 
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
    </SafeAreaView>
  )
}

export default Create
