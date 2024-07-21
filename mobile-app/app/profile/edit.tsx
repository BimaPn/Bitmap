import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../components/BackHeader'
import PrimaryButton from '../../components/PrimaryButton'
import FormField from '../../components/FormField'
import { icons, images } from '../../constants'

const ProfileEdit = () => {
  return (
    <SafeAreaView className='h-full bg-white flex-1'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <BackHeader title='Edit profile' />

        <View className='flex-1 items-center relative mt-4'>
          <View>
            <Image
            source={images.user}
            resizeMode='cover'
            className='w-28 h-28 rounded-full'
            />
          </View>
        </View>

        <View className='p-3 mt-3'> 
          <FormField
          title='Name' 
          value='Jajang Drajat'
          placeholder='' 
          otherStyles='mb-4'
          />
          <FormField
          title='Username' 
          value='jajat00'
          placeholder='' 
          readOnly
          otherStyles='mb-4 opacity-40'
          />
          <FormField
          title='Email' 
          value='jajat00@gmail.com'
          placeholder='' 
          readOnly
          otherStyles='mb-4 opacity-40'
          />
          <FormField
          title='Bio' 
          placeholder='Add a bio' 
          multiline
          numberOfLines={4}
          otherStyles='mb-4'
          inputStyles='!h-20 !items-start'
          />
        </View>
      </ScrollView>
      <View className='items-end p-3'> 
       <View className='w-1/3'> 
        <PrimaryButton
        title='Edit' 
        containerStyles='!w-fit !min-h-[50px]' textStyles='!text-[15px]'  
        />
       </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileEdit
