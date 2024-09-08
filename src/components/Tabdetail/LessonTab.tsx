import { View, Text, Image } from 'react-native'
import React from 'react'
import MusicPlayer from '@/components/Tabdetail/MusicPlayerBar'

interface ILessonTabProps {
  data: any
}

export default function LessonTab({ data }: ILessonTabProps) {
  return (
    <View>
      <Text className="text-center text-base">Luyện tập đánh lại theo khuông nhạc dưới.</Text>
      <Image
        source={{ uri: data.learnPractice.exercise.imageThumbnail }}
        className="w-full h-[400px] mt-2"
        resizeMode="stretch"
      />
      <Text className="text-center text-base font-bold mt-2">Âm thanh mẫu</Text>
      <View className="border p-2 rounded-[32px] border-[#D1D5DB] mt-2">
        <MusicPlayer data={data.learnPractice.exercise} />
      </View>
    </View>
  )
}
