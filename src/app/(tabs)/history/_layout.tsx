import { Stack } from 'expo-router'

const FavoritesScreenLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      bottomTabOptions={{
        hidden: true,
      }}
    ></Stack>
  )
}

export default FavoritesScreenLayout
