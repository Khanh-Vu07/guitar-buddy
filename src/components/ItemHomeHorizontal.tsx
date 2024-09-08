import { Image, Text, TouchableOpacity, View } from 'react-native'
import RenderTagComponent from '@/components/RenderTag'
import React from 'react'
import { router } from 'expo-router'

interface IItemHomeHorizontalProps {
  data: any
  isHistory?: boolean
  pathName?: string
}

export default function ItemHomeHorizontal({
  data,
  isHistory,
  pathName,
}: IItemHomeHorizontalProps) {
  return (
    <TouchableOpacity
      className="flex mb-2 flex-row items-center"
      onPress={() =>
        router.push({
          pathname: pathName ?? '',
          params: {
            data: JSON.stringify(data),
          },
        })
      }
    >
      <View className="relative">
        <Image
          source={{ uri: data.thumbnail }}
          className="w-[96px] h-[96px] rounded-2xl"
          resizeMode="cover"
        />
        {!isHistory ? (
          <View className="absolute bottom-2 left-2">
            <RenderTagComponent level={data.level} />
          </View>
        ) : null}
      </View>
      <View>
        <Text numberOfLines={2} className="font-medium max-w-[80%] ml-2 mt-2">
          {data.name}
        </Text>
        <Text numberOfLines={2} className="font-light max-w-[80%] ml-2 mt-2">
          {data.shortDescription}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
