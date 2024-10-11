import { View, Text, TouchableOpacity } from 'react-native'

interface ITitleHomeProps {
  title: string
  onPress?: () => void
}

export default function TitleHome({ title, onPress }: ITitleHomeProps) {
  return (
    <View className="flex-row flex justify-between py-4 items-center px-4">
      <Text className="text-xl font-bold text-primary-600">{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="text-gray-500">View All</Text>
      </TouchableOpacity>
    </View>
  )
}
