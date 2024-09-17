import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RenderTagComponent from '@/components/RenderTag'
import { router } from 'expo-router'

interface IItemHomeVerticalProps {
  data: any
  pathName?: string
}

export default function ItemHomeVertical({ data, pathName }: IItemHomeVerticalProps) {
  return (
    <TouchableOpacity
      className="rounded-2xl bg-[#f3f4f6] w-[272px] pb-3 mr-2"
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
          className="w-[272px] h-[153px] rounded-tr-2xl rounded-tl-2xl"
          resizeMode="cover"
        />
        <View className="absolute bottom-2 left-2">
          <RenderTagComponent level={data.level} />
        </View>
      </View>

      <Text numberOfLines={2} className="font-medium max-w-[80%] ml-2 mt-2">
        {data.name}
      </Text>
      <Text numberOfLines={2} className="font-light max-w-[80%] ml-2 mt-2">
        {data.shortDescription}
      </Text>
    </TouchableOpacity>
  )
}
