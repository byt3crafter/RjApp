import React from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, ViewStyle, TextStyle, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

// Layout Container
export const ScreenView = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <SafeAreaView style={[styles.screen, style]} edges={['top', 'left', 'right']}>
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 10 }}>
      {children}
    </View>
  </SafeAreaView>
);

export const ScrollScreen = ({ children, style, contentContainerStyle }: { children: React.ReactNode; style?: ViewStyle, contentContainerStyle?: ViewStyle }) => (
  <SafeAreaView style={[styles.screen, style]} edges={['top', 'left', 'right']}>
    <ScrollView 
      style={{ flex: 1 }}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </SafeAreaView>
);

// Card
export const Card = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

// Typography
export const Title = ({ children, style }: { children: React.ReactNode; style?: TextStyle }) => (
  <Text style={[styles.title, style]}>{children}</Text>
);

export const Subtitle = ({ children, style, numberOfLines }: { children: React.ReactNode; style?: TextStyle; numberOfLines?: number }) => (
  <Text style={[styles.subtitle, style]} numberOfLines={numberOfLines}>{children}</Text>
);

export const BodyText = ({ children, style, muted = false }: { children: React.ReactNode; style?: TextStyle; muted?: boolean }) => (
  <Text style={[styles.body, muted && styles.textMuted, style]}>{children}</Text>
);

export const Label = ({ children, style }: { children: React.ReactNode; style?: TextStyle }) => (
  <Text style={[styles.label, style]}>{children}</Text>
);

// Buttons
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
  loading?: boolean;
}

export const Button = ({ title, onPress, variant = 'primary', icon, style, loading }: ButtonProps) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary': return styles.btnSecondary;
      case 'outline': return styles.btnOutline;
      case 'ghost': return styles.btnGhost;
      default: return styles.btnPrimary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary': return styles.btnTextSecondary;
      case 'outline': return styles.btnTextOutline;
      case 'ghost': return styles.btnTextGhost;
      default: return styles.btnTextPrimary;
    }
  };

  return (
    <Pressable 
      style={({ pressed }) => [styles.btnBase, getButtonStyle(), pressed && styles.btnPressed, style]} 
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#000' : Colors.textPrimary} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {icon && <Ionicons name={icon} size={18} color={getTextStyle().color} />}
          <Text style={[styles.btnTextBase, getTextStyle()]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

// Chip
export const Chip = ({ label, selected, onPress }: { label: string; selected?: boolean; onPress?: () => void }) => (
  <Pressable 
    onPress={onPress}
    style={[styles.chip, selected && styles.chipSelected]}
  >
    <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{label}</Text>
  </Pressable>
);

// Input
export const Input = ({ label, value, onChangeText, placeholder, numeric, multiline }: { label?: string; value: string; onChangeText: (t: string) => void; placeholder?: string; numeric?: boolean; multiline?: boolean }) => (
  <View style={styles.inputContainer}>
    {label && <Text style={styles.inputLabel}>{label}</Text>}
    <TextInput
      style={[styles.input, multiline && styles.inputMultiline]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.textMuted}
      keyboardType={numeric ? 'numeric' : 'default'}
      multiline={multiline}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textMuted,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  textMuted: {
    color: Colors.textMuted,
  },
  // Buttons
  btnBase: {
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  btnPrimary: {
    backgroundColor: Colors.accent,
  },
  btnSecondary: {
    backgroundColor: Colors.surface,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  btnGhost: {
    backgroundColor: 'transparent',
  },
  btnTextBase: {
    fontWeight: '600',
    fontSize: 16,
  },
  btnTextPrimary: {
    color: '#000',
  },
  btnTextSecondary: {
    color: Colors.textPrimary,
  },
  btnTextOutline: {
    color: Colors.textPrimary,
  },
  btnTextGhost: {
    color: Colors.textMuted,
  },
  // Chips
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 8,
    marginBottom: 8,
  },
  chipSelected: {
    backgroundColor: Colors.accentDim,
    borderColor: Colors.accent,
  },
  chipText: {
    color: Colors.textMuted,
    fontWeight: '500',
    fontSize: 14,
  },
  chipTextSelected: {
    color: Colors.accent,
  },
  // Input
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: Colors.textMuted,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: Colors.border,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});