import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import PrimaryButton from '../../components/PrimaryButton'
import FormField, { ControlFormField } from '../../components/FormField'
import { Link } from 'expo-router'
import { useForm } from "react-hook-form"
import axios from 'axios'

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
    formState: { errors }
  } = useForm({ 
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = handleSubmit((data) => { 
    axios.post(`http://192.168.107.132:8000/api/register`,
    { ...data, password_confirmation: data.password },
    {withCredentials:true})
    .then((res) => {
      console.log(`success`)
      console.log(res.data)
      })
    .catch((err) => {
      console.log(err.response.data)
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
        otherStyles: 'mb-4'
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
        otherStyles: 'mb-4'
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
        otherStyles: 'mb-4'
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
        otherStyles: 'mb-4'
      }}  
      />

    </View>

    <PrimaryButton  
    title='Register'  
    handlePress={onSubmit}
    containerStyles='mt-6' 
    />
  </>
  )
}

export default Register 
