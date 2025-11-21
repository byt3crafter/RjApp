import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ScreenView, Card, Title, BodyText, Input, Button } from '../../components/ui';
import { Colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    // Navigate to the main app layout
    router.replace('/(tabs)/today');
  };

  return (
    <ScreenView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
               <Ionicons name="wallet-outline" size={40} color={Colors.accent} />
            </View>
            <Title style={{ textAlign: 'center', marginTop: 16 }}>RichJournal</Title>
            <BodyText muted style={{ textAlign: 'center' }}>Control impulses. Build wealth.</BodyText>
          </View>

          <Card style={styles.authCard}>
            <Input 
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
            />
            <Input 
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
            />
            
            <Button 
              title={isLogin ? "Unlock Terminal" : "Create Account"} 
              onPress={handleAuth} 
              style={{ marginTop: 8 }}
            />

            <Button 
              title={isLogin ? "New user? Sign up" : "Have an account? Login"}
              variant="ghost"
              onPress={() => setIsLogin(!isLogin)}
              style={{ marginTop: 8 }}
            />
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  authCard: {
    padding: 24,
  },
});