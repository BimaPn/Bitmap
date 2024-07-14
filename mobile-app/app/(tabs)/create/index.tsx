import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import FormField from '../../../components/FormField'

const CreatePost = () => {
  return (
    <SafeAreaView className='h-full bg-white'> 
     <ScrollView> 
        <View> 
          <Text>This is create page</Text>
          <FormField title='Title' placeholder='Add a title' />
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default CreatePost
