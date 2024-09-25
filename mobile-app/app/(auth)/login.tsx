import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import PrimaryButton from '../../components/PrimaryButton'
import { ControlFormField } from '../../components/FormField'
import { Link, router } from 'expo-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'

const Login = () => {
  return (
  <SafeAreaView className='bg-white h-full'> 
    <ScrollView> 
      <View 
      className='w-full h-full flex justify-center px-3' 
      style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
      >
        <Image  
        source={images.logo} 
        className='w-[135px] h-[43px] mb-5'  
        resizeMode='contain'  
        />

        <Text className='font-psemibold text-black text-xl mb-2'>Log In</Text>
        
        <LoginForm />

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

const LoginForm = () => {
  const { 
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ 
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const [loading, setloading] = useState(false)

  const { login } = useAuth()

  const onSubmit = handleSubmit( async (data) => { 
    setloading(true)
    const result = await login(data)
    const errorResponse = result.error

    if(result.ok) {
      router.push("/(home)/trending")
    }
    if(errorResponse) {
      setloading(false)
      for(const error in errorResponse) {
        setError(`${error}` as any, { type: "custom", message: errorResponse[error][0] })
      }
    }
  }) 
  return (
    <> 
      {errors.email?.message && (
      <View> 
        <Text className="text-red-500 font-pmedium">Email or password is incorrect.</Text>
      </View>
      )}

      <View className='mt-2'> 
       <ControlFormField  
        name='email'
        control={control as any}
        formFieldProps={{ 
          title:'Email',
          placeholder:'Enter your email',
          iconStart: (
            <Image source={icons.email_input} className="w-[26px] h-[26px]" resizeMode="contain" />
          ),
          otherStyles: 'mb-4',
        }}  
        />
        <ControlFormField  
        name='password'
        control={control as any}
        formFieldProps={{ 
          title:'Password',
          placeholder:'Enter your password',
          iconStart: (
            <Image source={icons.lock_input} className="w-[26px] h-[26px] -mt-1" resizeMode="contain" />
          ),
        }}  
        />
      </View>

      <View className='flex-row justify-end mt-3'> 
        <Text className='font-pmedium text-[15px] text-secondary'>Forget password?</Text>
      </View>

      <PrimaryButton  
      title='Log In'  
      isLoading={loading}
      handlePress={onSubmit}
      containerStyles='mt-6' 
      />
    </>
  )
}

export default Login
