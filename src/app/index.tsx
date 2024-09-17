import { useAppSelector } from '@/redux'
import { Redirect } from 'expo-router'
import { LogBox, View } from 'react-native'

LogBox.ignoreAllLogs()

export default function App() {
  const user = useAppSelector((state) => state.user)

  return (
    <>
      <View className="flex-1">
        {!user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/sign-in" />}
      </View>
    </>
  )
}
