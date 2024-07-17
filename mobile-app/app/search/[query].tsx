import { View, Text, SafeAreaView, FlatList } from 'react-native'
import Search from '../../components/Search'
import { useLocalSearchParams } from 'expo-router';
import { MasonryFlashList } from '@shopify/flash-list';
import { imagesExample } from '../../constants/images';
import Media from '../../components/Media';
import BackButton from '../../components/BackButton';

const Query = () => {
  const { query } = useLocalSearchParams();
  return (
    <SafeAreaView className="bg-primary h-full">

    <MasonryFlashList
      contentContainerStyle={{ 
        paddingHorizontal: 8,
        backgroundColor: "#FFFFFF",
      }}
      data={imagesExample}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => ( 
        <Media uri={item.image} containerStyles='m-1' /> 
      )}
      ListHeaderComponent={() => (
        <>
          <View className="flex-row mb-4 mt-10 pr-1">
            <BackButton containerStyles='!p-2 !mt-[0]'/> 
            <View className="flex-1">
              <Search initialQuery={query as string}/>
            </View>
          </View>
        </>
      )}
      estimatedItemSize={200}
    />

    </SafeAreaView>
  )
}

export default Query
