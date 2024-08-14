import { Stack } from 'expo-router'

const FavoritesScreenLayout = () => {
  return (
    <Stack  screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="home"
        options={{}}
      />
      <Stack.Screen
        name="home-detail"
        options={{}}
      />
    </Stack>
  )
}

export default FavoritesScreenLayout
