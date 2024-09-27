import { View, Text } from 'react-native'
import React from 'react'

const UserSearch = () => {
  return (
    <View>
      <Text>UserSearch</Text>
    </View>
  )
}

    // <MasonryFlashList
    //   contentContainerStyle={{ 
    //     paddingHorizontal: 8,
    //     backgroundColor: "#FFFFFF",
    //   }}
    //   data={posts}
    //   keyExtractor={(item) => item.id}
    //   numColumns={2}
    //   renderItem={({ item }) => ( 
    //     <Post 
    //     post={item} 
    //     containerStyles='m-1' 
    //     />
    //   )}
    //   ListHeaderComponent={() => (
    //     <>
    //       <View className="flex-row mb-4 mt-10 pr-1">
    //         <BackButton containerStyles='!p-2 !mt-[0]'/> 
    //         <View className="flex-1">
    //           <Search initialQuery={query as string}/>
    //         </View>
    //       </View>
    //
    //       <View className='flex-row gap-2 px-3 mb-6'>
    //         <TouchableOpacity className='!w-fit px-5 py-2 rounded-full bg-gray-200 border border-black'> 
    //           <Text className='-mt-[2px]'>Posts</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity className='!w-fit px-5 py-2 rounded-full bg-gray-200'> 
    //           <Text className='-mt-[2px]'>Users</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity className='!w-fit px-5 py-2 rounded-full bg-gray-200'> 
    //           <Text className='-mt-[2px]'>Collections</Text>
    //         </TouchableOpacity>
    //       </View>
    //
    //       {!posts && (
    //         <LoadingSpinner />
    //       )}
    //       {posts && posts.length < 1 && (
    //         <NoResult />
    //       )}
    //     </>
    //   )}
    //   estimatedItemSize={200}
    // />

export default UserSearch
