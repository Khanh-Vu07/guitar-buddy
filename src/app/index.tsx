import CustomButton from '@/components/CustomButton'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const user = true
  return (
    <>
      <View className="flex-1">
        {!user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/sign-in" />}
      </View>
    </>
  )
}
