import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

export default function CreateDetail() {
  const params = useLocalSearchParams()
  const { data } = params
  const item = JSON.parse(data)

  return (
    <View className="bg-white flex-1">
      <View className="relative h-[200px] flex-1">
        <Image
          source={{uri: item.banner}}
          className="w-full h-[200px]" resizeMode="cover" />
        <TouchableOpacity
          className="mt-14 ml-4 absolute"
          onPress={() => router.back()}
        >
          <AntDesign name="left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-4 mt-4">
            <Text className="text-[#0C5FFF] font-bold text-xl">{item.name}</Text>
            <Text className="my-2">{item.shortDescription}</Text>
            {item.contentTop.map((item: string, index: number) => (
              <Text key={index} className="mb-1">{`${item}`}</Text>
            ))}
            <Image
              source={{uri: item.banner}}
              className="w-full h-[200px] my-2" resizeMode="cover"
            />
            {item.contentBottom.map((item: string, index: number) => (
              <Text key={index} className="mb-1">{`${item}`}</Text>
            ))}
            <Text className="text-[#0C5FFF] mt-2">Biên dịch: {item.author}</Text>
          </View>
        </ScrollView>

      </View>
    </View>
  )
}
