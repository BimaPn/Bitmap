import { View, Text, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import NotificationItem from '../../components/NotificationItem'
import { notificationDummies } from '../../constants/dummy'
import PageHeader from '../../components/PageHeader'

const Notification = () => {
  return (
    <SafeAreaView className='h-full bg-white px-1'> 
      <FlatList 
      data={notificationDummies}   
      keyExtractor={(_, i) => `${i}`}
      renderItem={({item}) => ( 
        <NotificationItem  
        notification={item} 
        className=''
        />
      )}  
      ListHeaderComponent={() => ( 
        <PageHeader title='Notifications' />
      )}
      />
    </SafeAreaView> 
  )
}



export default Notification
