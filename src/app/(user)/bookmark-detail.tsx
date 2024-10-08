import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'
import data from '@/data/challenge.json'

export default function BookmarkDetail() {
  const { id } = useLocalSearchParams()
  const challenge = data.find((item) => item.id === id)

  return (
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <View className="flex-row flex items-center pb-2 relative mb-8 mx-4">
        <TouchableOpacity className="w-10" onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl m-auto">Thử thách</Text>
        <View className="w-10" />
      </View>
      <View className="flex-row items-center space-x-3 mb-8 px-2">
        <Image
          source={{ uri: challenge?.author_avatar }}
          className="w-12 h-12 rounded-2xl"
          resizeMode="cover"
        />
        <Text className="text-xl font-semibold flex-1">
          {challenge?.name} - {challenge?.author}
        </Text>
      </View>
      <View className="w-full rounded-2xl my-2 h-[400px]">
        <WebView
          className="w-full"
          originWhitelist={['*']}
          source={{
            uri: challenge?.video || '',
          }}
          startInLoadingState={true}
          renderLoading={() => <LoadingAnimation />}
        />
      </View>
    </SafeAreaView>
  )
}
