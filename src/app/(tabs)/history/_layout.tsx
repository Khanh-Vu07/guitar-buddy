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
    >
      <Stack.Screen
        name="history"
        options={{}}
      />
    </Stack>
  )
}

export default FavoritesScreenLayout;
