import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ScreenView, Title, Input, Button, Chip, Label } from '../components/ui';

export default function AddPurchaseScreen() {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [type, setType] = useState<'Planned' | 'Impulse'>('Planned');
  const [category, setCategory] = useState('Food');
  const [priority, setPriority] = useState<string | null>(null);

  const categories = ['Food', 'Transport', 'Home', 'Fun', 'Bills'];
  const priorities = ['Emergency Fund', 'New Laptop', 'Debt Payoff'];

  const handleSave = () => {
    // Mock save logic
    router.back();
  };

  return (
    <ScreenView>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.amountContainer}>
          <Input 
            value={amount}
            onChangeText={setAmount}
            placeholder="$0.00"
            numeric
          />
        </View>

        <View style={styles.section}>
          <Label>Type</Label>
          <View style={styles.row}>
            <Chip 
              label="Planned" 
              selected={type === 'Planned'} 
              onPress={() => setType('Planned')} 
            />
            <Chip 
              label="Impulse" 
              selected={type === 'Impulse'} 
              onPress={() => setType('Impulse')} 
            />
          </View>
        </View>

        <View style={styles.section}>
          <Label>Category</Label>
          <View style={styles.row}>
            {categories.map(c => (
              <Chip 
                key={c} 
                label={c} 
                selected={category === c} 
                onPress={() => setCategory(c)} 
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Label>Supports Priority? (Optional)</Label>
          <View style={styles.row}>
            {priorities.map(p => (
              <Chip 
                key={p} 
                label={p} 
                selected={priority === p} 
                onPress={() => setPriority(priority === p ? null : p)} 
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Input 
            label="Note"
            placeholder="What was this for?"
            value={note}
            onChangeText={setNote}
          />
        </View>

        <View style={styles.footer}>
          <Button title="Save Purchase" onPress={handleSave} />
        </View>
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  amountContainer: {
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
  }
});