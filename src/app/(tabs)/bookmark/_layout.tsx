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
        name="bookmark"
        options={{}}
      />
    </Stack>
  )
}

export default FavoritesScreenLayout;
