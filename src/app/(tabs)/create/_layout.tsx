import { Stack } from 'expo-router'

const FavoritesScreenLayout = () => {
  return (
    <Stack  screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="create"
        options={{}}
      />
      <Stack.Screen
        name="create-detail"
        options={{}}
      />
    </Stack>
  )
}

export default FavoritesScreenLayout
