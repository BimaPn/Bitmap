import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { icons } from '../../../../constants'
import FormField from '../../../../components/FormField'
import FormPicker, { FormPickerItem } from '../../../../components/FormPicker'
import PrimaryButton from '../../../../components/PrimaryButton'

const CreatePost = () => {
  return (
    <SafeAreaView className='h-full bg-white flex-1'> 
     <ScrollView> 
        <View className='flex-1 items-center relative mt-4'>
          <View className='relative'>
            <TouchableOpacity className='absolute top-0 right-0 z-10 p-2'> 
              <View className='bg-black/50 w-7 h-7 items-center justify-center rounded-full'> 
                <Image source={icons.edit_light} className='w-[65%] h-[65%]' resizeMode='contain' />
              </View> 
            </TouchableOpacity>
            <Image 
            source={{ uri:"https://i.ibb.co.com/xjGCwM1/nature.jpg"}}
            style={{ width:"70%", aspectRatio: 4/2.8 }} 
            resizeMode='cover'
            className='rounded-2xl'
            />
          </View>

        </View>

        <View className='p-3 mt-3'> 
          <FormField
          title='Title' 
          placeholder='Add a title' 
          otherStyles='mb-4'
          />
          <FormField  
          title='Description' 
          placeholder='Add a description' 
          otherStyles='mb-4'
          />
          <FormPicker
          title='Category' 
          > 
            <FormPickerItem label='Animals' value={`animals`} />
            <FormPickerItem label='Nature' value={`nature`} />
            <FormPickerItem label='Tecnologies' value={`technologies`} />
          </FormPicker>
        </View>

     </ScrollView>
     <View className='items-end p-3'> 
      <View className='w-1/3'> 
        <PrimaryButton title='Submit' containerStyles='!w-fit !min-h-[50px]' textStyles='!text-[15px]' />
      </View>
     </View>
    </SafeAreaView>
  )
}

export default CreatePost
