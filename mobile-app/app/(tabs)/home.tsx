import { Link } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className='h-full bg-white'> 
      <ScrollView> 
        <View> 
          <Text>This is home</Text>
          <Link href={`/login`}><Text>Login</Text></Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
