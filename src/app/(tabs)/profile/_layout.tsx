import { Stack } from 'expo-router'

const FavoritesScreenLayout = () => {
  return (
    <Stack  screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="profile"
        options={{}}
      />
      <Stack.Screen
        name="edit-profile"
        options={{}}
      />
      <Stack.Screen
        name="change-pasword"
        options={{}}
      />
    </Stack>
  )
}

export default FavoritesScreenLayout
