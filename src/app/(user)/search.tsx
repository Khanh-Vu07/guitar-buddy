import { FlatList, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import data from '@/data/music.json'
import ItemHomeHorizontal from '@/components/ItemHomeHorizontal'

export default function Search() {
  return (
    <SafeAreaView className="bg-white h-full relative flex-1">
      <View className="flex-row w-full items-center gap-2 mx-4 flex">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          className="border w-[80%] p-3 border-gray-300 rounded-2xl"
          placeholder="Tìm kiếm"
          icon="search"
        />
      </View>
      <View className="mx-4">
        <FlatList
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={data}
          renderItem={(item) => <ItemHomeHorizontal data={item.item} pathName="/home-detail" />}
        />
      </View>
    </SafeAreaView>
  )
}
