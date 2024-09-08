import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import LessonTab from '@/components/Tabdetail/LessonTab'
import TestTab from '@/components/Tabdetail/TestTab'
import TrackPlayer from 'react-native-track-player'

export default function PracticeScreen() {
  const [activeTab, setActiveTab] = useState('lesson')
  const params = useLocalSearchParams()
  const { data } = params
  const item = JSON.parse(data)

  const renderTab = (item) => {
    switch (activeTab) {
      case 'test':
        return <TestTab data={item} />
      default:
        return <LessonTab data={item} />
    }
  }

  return (
    <SafeAreaView className="bg-white h-full relative flex-1">
      <View className="flex-row flex justify-between items-center pb-2 mx-4">
        <TouchableOpacity
          onPress={() => {
            router.back()
            TrackPlayer.reset()
          }}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-medium text-[#1F2937] text-xl">Thực hành</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View className="bg-[#F3F4F6] h-[48px] w-full py-2 px-4">
        <View className="bg-[#e4e7eb] w-full h-[32px] rounded-[10px] flex-row p-1">
          <TouchableOpacity
            onPress={() => setActiveTab('lesson')}
            className={`w-[50%] flex justify-center items-center ${activeTab === 'lesson' ? 'bg-white rounded-[10px]' : ''}`}
          >
            <Text>Bài tập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('test')}
            className={`w-[50%] flex justify-center items-center ${activeTab === 'test' ? 'bg-white rounded-[10px]' : ''}`}
          >
            <Text>Trắc nghiệm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-4 mt-2">{renderTab(item)}</View>
    </SafeAreaView>
  )
}
