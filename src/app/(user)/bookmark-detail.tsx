import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function BookmarkDetail() {
  const params = useLocalSearchParams()
  const { image } = params

  return (
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <View className="flex-row flex items-center pb-2 relative mb-8 mx-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl m-auto">Thử thách</Text>
      </View>
      <View>
      </View>
      <Image
        source={{
          uri: image ??
            'https://i.pinimg.com/736x/5d/a4/4f/5da44f45038c231b47abc95d144b6186.jpg',
        }}
        className="w-full h-[70%] rounded-2xl" resizeMode="cover"
      />
    </SafeAreaView>
  )
}
