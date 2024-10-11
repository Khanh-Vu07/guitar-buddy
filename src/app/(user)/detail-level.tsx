import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import data from '@/data/music.json'
import ItemHomeHorizontal from '@/components/ItemHomeHorizontal'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

export default function DetailLevel() {
  const params = useLocalSearchParams()
  const { title, level } = params

  const lessons = data.filter((item) => item.level === level)

  return (
    <ScreenWrapper bg="white">
      <View className="flex-row flex justify-between items-center pb-2 mx-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-medium text-[#1F2937] text-xl">{title ?? ''}</Text>
        <TouchableOpacity onPress={() => router.push('/search')}>
          <EvilIcons name="search" size={30} color="#6B7280" />
        </TouchableOpacity>
      </View>
      <View className="mx-4">
        <FlatList
          className="mt-4"
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={lessons}
          renderItem={(item) => <ItemHomeHorizontal data={item.item} pathName="/home-detail" />}
          ListFooterComponent={<View className="h-12" />}
        />
      </View>
    </ScreenWrapper>
  )
}
