import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          // Dynamic height: Base content height (60) + safe area inset
          height: 60 + insets.bottom,
          // Dynamic padding: Ensure content clears the home indicator/gesture bar
          paddingBottom: insets.bottom,
          paddingTop: 10,
          // Remove native shadows for a clean, flat terminal look
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 10,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="today"
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => <Ionicons name="today-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wants"
        options={{
          title: 'Wants',
          tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="priorities"
        options={{
          title: 'Priorities',
          tabBarIcon: ({ color }) => <Ionicons name="flag-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <Ionicons name="time-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
