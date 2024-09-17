import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

interface ItemHomeAbsoluteProps {
  data: {
    thumbnail: string
    name: string
    shortDescription: string
  }
  pathName?: string
}

export default function ItemHomeAbsolute({ data, pathName }: ItemHomeAbsoluteProps) {
  return (
    <TouchableOpacity
      className="relative mr-2 bg-white"
      onPress={() =>
        router.push({
          pathname: pathName ?? '',
          params: {
            data: JSON.stringify(data),
          },
        })
      }
    >
      <Image
        source={{ uri: data.thumbnail }}
        className="w-[372px] h-[376px] rounded-2xl"
        resizeMode="cover"
      />
      <Text
        numberOfLines={2}
        className="text-white font-bold text-xl max-w-[80%] absolute bottom-10 left-4 z-10"
      >
        {data.name}
      </Text>
      <Text numberOfLines={1} className="text-white max-w-[80%] absolute bottom-2 left-4 z-10">
        {data.shortDescription}
      </Text>
      <View className="w-full h-[40%] bg-black/20 absolute bottom-0 rounded-b-2xl" />
    </TouchableOpacity>
  )
}
