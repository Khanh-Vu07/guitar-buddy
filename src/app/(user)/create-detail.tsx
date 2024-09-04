import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'

export default function CreateDetail() {
  const params = useLocalSearchParams()
  const { data } = params
  const item = JSON.parse(data)

  const runFirst = `
      document.getElementsByClassName('page-header').style.display = 'none';
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  return (
    <SafeAreaView className="bg-white flex-1">
      <TouchableOpacity onPress={() => router.back()} className="flex pb-2 flex-row mx-4 items-center gap-2">
        <AntDesign name="left" size={24} color="black" />
        <Text className="font-semibold text-xl">Trở lại</Text>
      </TouchableOpacity>
      <WebView
        className="w-full h-full"
        source={{
          uri: item.linkPost
        }}
        javaScriptEnabled={true}
        injectedJavaScript={runFirst}
        startInLoadingState={true}
        renderLoading={() => <LoadingAnimation />}
      />

    </SafeAreaView>
  )
}
