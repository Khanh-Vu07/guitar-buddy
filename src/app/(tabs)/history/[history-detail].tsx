import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'

export default function HistoryDetail() {
  const params = useLocalSearchParams()
  const { data } = params
  const item = JSON.parse(data)
  return(
    <View className="bg-white flex-1">
      <View className="relative h-[200px] flex-1">
        <Image
          source={{uri: item.thumbnail}}
          className="w-full h-[200px]" resizeMode="cover" />
        <TouchableOpacity
          className="mt-14 ml-4 absolute"
          onPress={() => router.back()}
        >
          <AntDesign name="left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View className="flex-row">
          <Text className="text-[#FFFFFFAD] absolute bottom-[12px] left-2">15/01/2024</Text>
          <View className="absolute bottom-[12px] right-2 flex-col items-center">
            <Text className="text-[#FFFFFF] font-bold">10/12</Text>
            <Text className="text-[#FFFFFFAD]">Điểm cao nhất</Text>
          </View>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-4 mt-4">
            <Text className="text-[#0C5FFF] font-bold text-xl">{item.name}</Text>
            <Text className="mt-2">{item.shortDescription}</Text>
            <Text className="font-bold my-2">Mục tiêu</Text>
            {item.target.map((item: string, index: number) => (
              <Text key={index} className="mb-1">{`\u2022 ${item}`}</Text>
            ))}
            <Image
              source={{uri: item.thumbnail}}
              className="w-full h-[200px] rounded-2xl my-2" resizeMode="cover"
            />
            <Text className="font-bold my-2">Học các kiến thức nhạc lý cơ bản</Text>
            {item.detailLearn.map((item: string, index: number) => (
              <Text key={index} className="mb-1">{`\u2022 ${item}`}</Text>
            ))}
            {/*<CustomButton*/}
            {/*  title="Thực hành"*/}
            {/*  onPress={() => router.back()}*/}
            {/*  containerStyle="w-full mt-7 bg-primary-600 min-h-[48px]"*/}
            {/*  textStyle="text-white"*/}
            {/*/>*/}
          </View>
        </ScrollView>

      </View>
    </View>
  )
}
