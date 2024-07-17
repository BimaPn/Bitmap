import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import FormField from './FormField'
import { icons } from '../constants'
import { useState } from 'react'
import { router, usePathname } from 'expo-router'

type SearchType = { 
  otherStyles?: string
  initialQuery?: string
}

const Search = (props:SearchType) => {
  const {  
    otherStyles,
    initialQuery
  } = props

  const pathname = usePathname()
  const [query, setquery] = useState(initialQuery || "")

  const onSearch = () => {
    if (query === "") {
      return Alert.alert(
        "Missing Query",
        "Please input something to search results across database"
      );
    }

    if (pathname.startsWith("/search")) router.setParams({ query });
    else router.push(`/search/${query}`)
  }
  return (
    <View className={`space-y-2 ${otherStyles}`}>

      <View className="w-full h-14 px-4 bg-black-100 rounded-[14px] bg-semiLight focus:border-2 focus:border-secondary flex flex-row items-center">
        <TouchableOpacity onPress={onSearch} className="mr-3"> 
          <Image source={icons.searchInput} className="w-[24px] h-[24px]" resizeMode="contain" />
        </TouchableOpacity>
        <TextInput
          className="flex-1 text-black font-pmedium text-base"
          value={query}
          placeholder={"Search for ideas"}
          placeholderTextColor="#7B7B8B"
          onChangeText={(e) => setquery(e)}
          onSubmitEditing={onSearch}
          {...props}
        />

      </View>
    </View>
  )
}

export default Search
