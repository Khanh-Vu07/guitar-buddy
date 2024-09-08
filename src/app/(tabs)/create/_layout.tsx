import { Stack } from 'expo-router'

const FavoritesScreenLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="create" options={{}} />
    </Stack>
  )
}

export default FavoritesScreenLayout
