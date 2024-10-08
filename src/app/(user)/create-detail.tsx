import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'
import { posts } from '@/data/post'

export default function CreateDetail() {
  const params = useLocalSearchParams()
  const { id } = params
  const postData = posts.find((post) => String(post.id) === String(id))

  const runFirst = `
      document.getElementsByClassName('page-header').style.display = 'none';
      true; // note: this is required, or you'll sometimes get silent failures
    `

  return (
    <SafeAreaView className="bg-white flex-1 bg-red">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex pb-2 flex-row mx-4 items-center gap-2 ml-2"
      >
        <AntDesign name="left" size={18} color="#2563eb" />
        <Text className="font-semibold text-md text-blue-600">Trở lại</Text>
      </TouchableOpacity>
      <WebView
        className="w-full h-full"
        source={{
          html: `
            <style>
              * { font-family: Roboto, sans-serif; font-size: 1.2rem; padding: 12px; }
              h1 { font-size: 3rem; }
              h2 { font-size: 2rem; }
            </style>
            ${postData?.htmlContent || 'No content'}
          `,
        }}
        javaScriptEnabled={true}
        injectedJavaScript={runFirst}
        startInLoadingState={true}
        renderLoading={() => <LoadingAnimation />}
      />
    </SafeAreaView>
  )
}
