import { View, Text } from 'react-native'
interface IRenderTagComponentProps {
  level: string
}

export default function RenderTagComponent({ level }: IRenderTagComponentProps) {
  switch (level) {
    case '1':
      return (
        <View className="bg-[#00000080] rounded px-2 py-0.5">
          <Text className="text-[#37BB2C] font-bold">Dễ</Text>
        </View>
      )
    case '2':
      return (
        <View className="bg-[#00000080] rounded px-2 py-0.5">
          <Text className="text-[#EAB308] font-bold">Vừa</Text>
        </View>
      )
    default:
      return (
        <View className="bg-[#00000080] rounded px-2 py-0.5">
          <Text className="text-[#EF4444] font-bold">Khó</Text>
        </View>
      )
  }
}
