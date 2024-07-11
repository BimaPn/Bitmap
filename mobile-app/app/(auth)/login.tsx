import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import PrimaryButton from '../../components/PrimaryButton'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'

const Login = () => {
  return (
  <SafeAreaView className='bg-white h-full'> 
    <ScrollView> 
      <View 
      className='w-full h-full flex justify-center px-4' 
      style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
      >

        <Image  
        source={images.logo} 
        className='w-[135px] h-[43px] mb-6'  
        resizeMode='contain'  
        />

        <Text className='font-psemibold text-black text-xl'>Log In</Text>
        
        <View className='mt-4'> 
          <FormField  
          title='Email' 
          placeholder='Enter your email' 
          iconStart={ 
            <Image source={icons.email_input} className="w-[26px] h-[26px]" resizeMode="contain" />
          }
          otherStyles='mb-4'
          />
          <FormField  
          title='Password'  
          placeholder='Enter your password' 
          iconStart={ 
            <Image source={icons.lock_input} className="w-[26px] h-[26px] -mt-1" resizeMode="contain" />
          }
          />
        </View>

        <View className='flex-row justify-end mt-3'> 
          <Text className='font-pmedium text-base text-secondary'>Forget password?</Text>
        </View>

        <PrimaryButton title='Log In' containerStyles='mt-6' />

        <View className='items-center mt-5'> 
          <Text className='text-netral text-base'> 
            Don't have an account?{" "}
            <Link href={`/register`} className='text-secondary font-pmedium text-[15px]'>Register</Link> 
          </Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Login
