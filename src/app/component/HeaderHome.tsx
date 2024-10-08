import { View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useAppSelector } from '@/redux'
import Avatar from '@/components/ui/Avatar'

interface IHeaderHome {
  title?: string
  rightAction?: React.ReactNode
}

export default function HeaderHome({ title, rightAction }: IHeaderHome) {
  const profile = useAppSelector((state) => state.user.data.profile)

  if (!rightAction) {
    rightAction = (
      <TouchableOpacity className="w-[40px] items-end" onPress={() => router.push('/search')}>
        <EvilIcons name="search" size={28} color="#6B7280" />
      </TouchableOpacity>
    )
  }
  return (
    <View className="flex-row flex justify-between items-center pb-2 px-4">
      <View className="w-[40px]">
        <TouchableOpacity onPress={() => router.navigate('/profile')}>
          {profile && <Avatar size="sm" uri={profile?.image} />}
        </TouchableOpacity>
      </View>
      {title && <Text className="font-bold text-xl">{title}</Text>}
      {!title && <Text className="font-bold text-xl">Piano Pulse</Text>}
      <View className="w-[40px]">{rightAction}</View>
    </View>
  )
}
