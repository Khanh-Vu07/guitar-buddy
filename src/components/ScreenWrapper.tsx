import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode
  bg?: string
  safeBottom?: boolean
  safeTop?: boolean
  statusBar?: 'dark' | 'light'
}

const ScreenWrapper = ({
  children,
  bg,
  safeBottom = false,
  safeTop = true,
  statusBar = 'dark',
}: Props) => {
  const { top, bottom } = useSafeAreaInsets()
  const paddingTop = top > 0 ? top + 12 : 30
  const paddingBottom = safeBottom ? bottom + 5 : 0

  return (
    <View
      style={{ flex: 1, paddingTop: safeTop ? paddingTop : 0, paddingBottom, backgroundColor: bg }}
    >
      {children}
      <StatusBar style={statusBar} />
    </View>
  )
}

export default ScreenWrapper
