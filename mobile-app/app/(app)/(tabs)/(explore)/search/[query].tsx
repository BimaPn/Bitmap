import { View, SafeAreaView, TouchableOpacity, Text, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { MasonryFlashList } from '@shopify/flash-list';
import BackButton from '../../../../../components/BackButton';
import Search from '../../../../../components/Search';
import { useEffect, useState } from 'react';
import ApiClient from '../../../../../api/axios/ApiClient';
import NoResult from '../../../../../components/NoResult';
import LoadingSpinner from '../../../../../components/LoadingSpinner';
import Post from '../../../../../components/Post';
import PostSearch from '../../../../../components/search/PostSearch';
import UserSearch from '../../../../../components/search/UserSearch';
import CollectionSearch from '../../../../../components/search/CollectionSearch';

const Query = () => {
  const { query } = useLocalSearchParams();

  return  (
    <SafeAreaView className="bg-white h-full">

        <ScrollView>
          <View className="flex-row mb-5 mt-10 pr-3 pl-1">
            <BackButton containerStyles='!p-2 !mt-[0]'/> 
            <View className="flex-1">
              <Search initialQuery={query as string}/>
            </View>
          </View>

          <SearchContent query={query as string} />
        </ScrollView>
    </SafeAreaView>
  )
}


type SearchType = "Posts" | "Users" | "Collections"

const types = ["Posts", "Users", "Collections"]

const SearchContent = ({ query }: { query: string }) => {
  const [type, settype] = useState<SearchType>("Posts")
  return (
    <View>
        <View className='flex-row gap-2 px-3 mb-6'>
          {types.map((item, i) => (
            <TouchableOpacity 
            key={i}
            onPress={() => settype(item as SearchType)}
            activeOpacity={.9}
            className={`!w-fit px-5 py-2 rounded-full bg-gray-200 ${item === type && "border border-black" }`}
            > 
              <Text className='-mt-[2px]'>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className='px-3'>
        
          {type === "Posts" && (
          <PostSearch query={query} />
          )}

          {type === "Users" && (
          <UserSearch query={query} />
          )}

          {type === "Collections" && (
          <CollectionSearch query={query} />
          )}
  
        </View>
    </View>
  )
}


export default Query
