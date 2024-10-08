import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

interface IItemPostProps {
  data: any
}

export default function ItemPost({ data }: IItemPostProps) {
  return (
    <TouchableOpacity
      className="flex mb-2 flex-row items-center space-x-3"
      onPress={() =>
        router.push({
          pathname: '/create-detail',
          params: {
            id: data.id,
          },
        })
      }
    >
      <Image
        source={{ uri: data.banner }}
        className="w-[80px] h-[80px] rounded-2xl"
        resizeMode="cover"
      />
      <View className="flex-1 space-y-3">
        <Text className="font-medium w-full" numberOfLines={2}>
          {data.name}
        </Text>
        <Text className="font-light w-full" numberOfLines={2}>
          {data.shortDescription}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
