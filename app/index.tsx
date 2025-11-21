import { Redirect } from 'expo-router';

export default function Index() {
  // In a real app, check auth state here
  // For now, assume unauthenticated -> Login
  return <Redirect href="/auth/login" />;
}