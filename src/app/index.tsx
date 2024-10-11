import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Button from '@/components/ui/Button'
import { router } from 'expo-router'
import { ImageBackground } from 'expo-image'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const WelcomeScreen = () => {
  return (
    <ScreenWrapper safeTop={false}>
      <StatusBar style="light" />
      <ImageBackground
        className="flex-1 justify-end"
        source={require('@/assets/images/onboard.png')}
      >
        <View className="pb-16 px-6">
          <Text className="text-3xl font-light text-white mb-8 text-center">Piano Pulse</Text>
          <Button title="Login" onPress={() => router.push('/sign-in')} />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  )
}

export default WelcomeScreen
