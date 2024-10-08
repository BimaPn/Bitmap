import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import PrimaryButton from '../../components/PrimaryButton'
import FormField, { ControlFormField } from '../../components/FormField'
import { Link, router } from 'expo-router'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Toast from 'react-native-toast-message'
import { useState } from 'react'

const Register = () => {
  return (
  <SafeAreaView className='bg-white h-full'> 
    <ScrollView> 
      <View 
      className='w-full h-full flex justify-center px-3' 
      style={{
            minHeight: Dimensions.get("window").height - 50,
          }}
      >
        <Image  
        source={images.logo} 
        className='w-[135px] h-[43px] mb-5'  
        resizeMode='contain'  
        />

        <Text className='font-psemibold text-black text-xl'>Register</Text>
        
        <RegisterForm />

        <View className='items-center mt-5'> 
          <Text className='text-netral text-base'>
            Already have an account?{" "}
            <Link href={`/login`} className='text-secondary font-pmedium text-[15px]'>Log In</Link> 
          </Text>
        </View>

      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

const RegisterForm = () => {
  const { 
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ 
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    }
  })
    
  const [loading, setloading] = useState(false)

  const onSubmit = handleSubmit((data) => { 
    setloading(true)
    axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/register`,
    { ...data, password_confirmation: data.password })
    .then((res) => {
      Toast.show({
        type: 'success',
        text1: 'Registration Successful!',
        text2: 'Your account has been created.'
      });
      router.replace("/login")
    })
    .catch((err) => {
      setloading(false)
      const errorResponse = err.response.data
      for(const error in errorResponse) {
        setError(`${error}` as any, { type: "custom", message: errorResponse[error][0] })
      }
    })
  }) 

  return (
  <> 
    <View className='mt-4'> 

      <ControlFormField  
      name='name'
      control={control as any}
      formFieldProps={{ 
        title:'Name',
        placeholder:'Enter your name',
        iconStart: (
          <Image source={icons.user} className="w-[26px] h-[26px] -mt-[6px]" resizeMode="contain" />
        ),
        otherStyles: 'mb-4',
        errorMessage: errors.name?.message
      }}  
      />

      <ControlFormField  
      name='username'
      control={control as any}
      formFieldProps={{ 
        title:'Username',
        placeholder:'Enter your username',
        iconStart: (
          <Image source={icons.user} className="w-[26px] h-[26px] -mt-[6px]" resizeMode="contain" />
        ),
        otherStyles: 'mb-4',
        errorMessage: errors.username?.message
      }}  
      />

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
        errorMessage: errors.email?.message
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
        otherStyles: 'mb-4',
        errorMessage: errors.password?.message
      }}  
      />

    </View>

    <PrimaryButton  
    title='Register'  
    isLoading={loading}
    handlePress={onSubmit}
    containerStyles='mt-6' 
    />
  </>
  )
}

export default Register 
