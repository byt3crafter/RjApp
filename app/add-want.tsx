import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ScreenView, Input, Button, Chip, Label } from '../components/ui';

export default function AddWantScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [tag, setTag] = useState('Upgrade');

  const tags = ['Upgrade', 'Comfort', 'Flex', 'Learning'];

  return (
    <ScreenView>
      <ScrollView contentContainerStyle={styles.content}>
        <Input 
          label="Item Name"
          placeholder="e.g. Noise Cancelling Headphones"
          value={name}
          onChangeText={setName}
        />
        
        <Input 
          label="Price"
          placeholder="$0.00"
          value={price}
          onChangeText={setPrice}
          numeric
        />

        <View style={styles.section}>
          <Label>Tag</Label>
          <View style={styles.row}>
            {tags.map(t => (
              <Chip 
                key={t} 
                label={t} 
                selected={tag === t} 
                onPress={() => setTag(t)} 
              />
            ))}
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
           <Button title="Add to Waiting List" onPress={() => router.back()} />
        </View>
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});