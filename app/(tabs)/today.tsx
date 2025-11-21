import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { ScrollScreen, Title, Subtitle, BodyText, Card, Chip, Input, Button } from '../../components/ui';
import { Colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function TodayScreen() {
  const [intention, setIntention] = useState('');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = ['🧘 Calm', '⚡ Impulsive', '😰 Anxious', '🤑 Rich'];
  const focusItems = ['No impulse snacks', 'Move $50 to Savings', 'Check Subs'];

  const purchases = [
    { id: '1', title: 'Morning Coffee', amount: '-$4.50', category: 'Food', type: 'Impulse' },
    { id: '2', title: 'Grocery Run', amount: '-$65.20', category: 'Home', type: 'Planned' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollScreen>
        <View style={styles.header}>
          <Title>Today in RichJournal</Title>
          <BodyText muted>Tue, Oct 24</BodyText>
        </View>

        {/* Money Mood */}
        <View style={styles.section}>
          <BodyText style={styles.sectionLabel}>Money Mood</BodyText>
          <View style={styles.chipRow}>
            {moods.map((m) => (
              <Chip 
                key={m} 
                label={m} 
                selected={selectedMood === m} 
                onPress={() => setSelectedMood(m)} 
              />
            ))}
          </View>
        </View>

        {/* Focus */}
        <View style={styles.section}>
          <BodyText style={styles.sectionLabel}>Today's Focus</BodyText>
          <View style={styles.chipRow}>
            {focusItems.map((f) => (
              <Chip key={f} label={f} />
            ))}
          </View>
        </View>

        {/* Intention */}
        <View style={styles.section}>
           <Input 
             placeholder="Set a financial intention for today..."
             value={intention}
             onChangeText={setIntention}
           />
        </View>

        {/* Purchases */}
        <View style={styles.section}>
          <Subtitle>Today's Spending</Subtitle>
          {purchases.map((p) => (
            <Card key={p.id} style={styles.purchaseCard}>
              <View style={styles.purchaseIcon}>
                <Ionicons 
                  name={p.type === 'Impulse' ? 'flash-outline' : 'checkmark-circle-outline'} 
                  size={20} 
                  color={p.type === 'Impulse' ? Colors.error : Colors.accent} 
                />
              </View>
              <View style={{ flex: 1 }}>
                <BodyText style={{ fontWeight: '600' }}>{p.title}</BodyText>
                <BodyText muted style={{ fontSize: 12 }}>{p.category} • {p.type}</BodyText>
              </View>
              <BodyText style={{ fontWeight: '600' }}>{p.amount}</BodyText>
            </Card>
          ))}
          
          <Button 
            title="Add Purchase" 
            icon="add-circle-outline"
            onPress={() => router.push('/add-purchase')}
            style={{ marginTop: 8 }}
          />
        </View>
      </ScrollScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontWeight: '600',
    marginBottom: 12,
    color: Colors.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  purchaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  purchaseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
});