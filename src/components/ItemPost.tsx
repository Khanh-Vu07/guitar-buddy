import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

interface IItemPostProps {
  data: any
}

export default function ItemPost({ data }: IItemPostProps) {
  return (
    <TouchableOpacity
      className="flex mb-2 flex-row items-center"
      onPress={() =>
        router.push({
          pathname: '/create-detail',
          params: {
            data: JSON.stringify(data),
          },
        })
      }
    >
      <Image
        source={{ uri: data.banner }}
        className="w-[96px] h-[96px] rounded-2xl"
        resizeMode="cover"
      />
      <View>
        <Text className="font-medium ml-2 mt-2 max-w-[80%]" numberOfLines={2}>
          {data.name}
        </Text>
        <Text className="font-light ml-2 mt-2 max-w-[80%]" numberOfLines={2}>
          {data.shortDescription}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
