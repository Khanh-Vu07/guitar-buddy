import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'
import ScreenWrapper from '@/components/ScreenWrapper'

export default function HomeDetail() {
  const params = useLocalSearchParams()
  const { data } = params
  const item = JSON.parse(data as string)
  const [linkVideo, setLinkVideo] = useState(
    'https://www.youtube.com/embed/SFpXwAbwP3Q?si=qNz7cs_X2yiRUA2W',
  )

  useEffect(() => {
    if (item?.videoThumbnail) {
      setLinkVideo(item.videoThumbnail)
    }
  }, [item])

  return (
    <ScreenWrapper bg="white">
      <View className="bg-white flex-1">
        <View className="relative h-[200px] flex-1">
          <View className="px-4 space-y-3">
            <TouchableOpacity className="mt-4 flex-row items-center" onPress={() => router.back()}>
              <AntDesign name="left" size={20} color="#000000" />
              <Text>Back</Text>
            </TouchableOpacity>
            <Text className="text-[#0C5FFF] font-bold text-xl">{item.name}</Text>
          </View>
          <View className="w-full rounded-2xl my-2 h-[200px]">
            <WebView
              className="w-full h-full"
              originWhitelist={['*']}
              source={{
                uri: linkVideo,
              }}
              startInLoadingState={true}
              renderLoading={() => <LoadingAnimation />}
            />
          </View>
          <ScrollView className="flex-1 mb-3" showsVerticalScrollIndicator={false}>
            <View className="px-4 mt-4">
              <Text className="mt-2">{item.shortDescription}</Text>
              {item.target && (
                <Text className="font-bold my-2">Some key highlights of the video include:</Text>
              )}
              {item.target?.map((item: string, index: number) => (
                <Text key={index} className="mb-1">{`\u2022 ${item}`}</Text>
              ))}

              {item.detailLearn && (
                <Text className="font-bold my-2">After the lesson, you would know:</Text>
              )}
              {item.detailLearn?.map((item: string, index: number) => (
                <Text key={index} className="mb-1">{`\u2022 ${item}`}</Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  )
}
