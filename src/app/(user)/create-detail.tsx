import { Text, TouchableOpacity } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'
import { posts } from '@/data/post'
import ScreenWrapper from '@/components/ScreenWrapper'

export default function CreateDetail() {
  const params = useLocalSearchParams()
  const { id } = params
  const postData = posts.find((post) => String(post.id) === String(id))

  const runFirst = `
      document.getElementsByClassName('page-header').style.display = 'none';
      true; // note: this is required, or you'll sometimes get silent failures
    `

  return (
    <ScreenWrapper bg="white">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex pb-2 flex-row mx-4 items-center gap-2 ml-2"
      >
        <AntDesign name="left" size={18} color="#2563eb" />
        <Text className="font-semibold text-md text-blue-700">Back</Text>
      </TouchableOpacity>
      <WebView
        className="w-full h-full"
        source={{
          html: `
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              * { font-family: Roboto, sans-serif; font-size: 18px; padding: 4px; }
              h1 { font-size: 24px; color: #1d4ed8 }
              h2 { font-size: 20px; color: #1d4ed8}
            </style>
            ${postData?.htmlContent || 'No content'}
          `,
        }}
        javaScriptEnabled={true}
        injectedJavaScript={runFirst}
        startInLoadingState={true}
        renderLoading={() => <LoadingAnimation />}
      />
    </ScreenWrapper>
  )
}
