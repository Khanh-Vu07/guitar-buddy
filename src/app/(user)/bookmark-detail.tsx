import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'

export default function BookmarkDetail() {
  const params = useLocalSearchParams()
  const { image } = params

  return (
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <View className="flex-row flex items-center pb-2 relative mb-8 mx-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl m-auto">Thử thách</Text>
      </View>
      <View></View>
      <WebView
        className="w-full h-full"
        originWhitelist={['*']}
        source={{
          uri: image,
        }}
        startInLoadingState={true}
        renderLoading={() => <LoadingAnimation />}
      />
    </SafeAreaView>
  )
}
