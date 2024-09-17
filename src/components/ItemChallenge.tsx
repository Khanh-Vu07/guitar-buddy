import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

interface IItemChallengeProps {
  data: any
}

export default function ItemChallenge({ data }: IItemChallengeProps) {
  const router = useRouter()

  return (
    <TouchableOpacity
      className="flex mb-2 flex-row items-center border-b border-b-[#F3F4F6] pb-2"
      onPress={() =>
        router.push({
          pathname: '/bookmark-detail',
          params: {
            id: data.id,
          },
        })
      }
    >
      <Image
        source={{ uri: data.author_avatar }}
        className="w-[96px] h-[96px] rounded-2xl"
        resizeMode="cover"
      />
      <View>
        <Text className="font-medium ml-2 mt-2">{data.name}</Text>
        <Text className="font-light ml-2 mt-2">{data.author}</Text>
      </View>
    </TouchableOpacity>
  )
}
