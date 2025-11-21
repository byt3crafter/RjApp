import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Colors } from '../constants/colors';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.textPrimary,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.textPrimary,
          },
          contentStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen 
          name="add-purchase" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            title: 'New Purchase',
            headerStyle: { backgroundColor: Colors.card },
          }} 
        />
        <Stack.Screen 
          name="add-want" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            title: 'New Want',
            headerStyle: { backgroundColor: Colors.card },
          }} 
        />
      </Stack>
    </View>
  );
}