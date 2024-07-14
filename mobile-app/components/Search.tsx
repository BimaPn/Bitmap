import { View, Text, TextInput, Image } from 'react-native'
import FormField from './FormField'
import { icons } from '../constants'
import { useState } from 'react'

type SearchType = { 
  otherStyles?: string
}

const Search = (props:SearchType) => {
  const { otherStyles } = props
  const [query, setquery] = useState("")
  return (
    <View className={`space-y-2 ${otherStyles}`}>

      <View className="w-full h-14 px-4 bg-black-100 rounded-[14px] bg-semiLight focus:border-2 focus:border-secondary flex flex-row items-center">
        <View className="mr-2"> 
          <Image source={icons.searchInput} className="w-[24px] h-[24px]" resizeMode="contain" />
        </View>
        <TextInput
          className="flex-1 text-black font-pmedium text-base"
          value={query}
          placeholder={"Search for ideas"}
          placeholderTextColor="#7B7B8B"
          onChangeText={(e) => setquery(e)}
          {...props}
        />

      </View>
    </View>
  )
}

export default Search
