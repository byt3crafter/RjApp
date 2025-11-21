import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native';
import { router } from 'expo-router';
import { ScreenView, Title, BodyText, Card, Button } from '../../components/ui';
import { Colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const TABS = ['Waiting', 'Ready', 'History'];

export default function WantsScreen() {
  const [activeTab, setActiveTab] = useState('Waiting');

  // Mock data
  const wants = [
    { id: '1', name: 'Sony XM5 Headphones', price: '$348', tag: 'Upgrade', status: 'Waiting', daysLeft: 11 },
    { id: '2', name: 'Espresso Machine', price: '$600', tag: 'Comfort', status: 'Waiting', daysLeft: 4 },
    { id: '3', name: 'Vintage Leather Jacket from the 80s', price: '$120', tag: 'Flex', status: 'Ready', daysLeft: 0 },
  ];

  const filteredWants = wants.filter(w => w.status === activeTab || (activeTab === 'History' && w.status === 'Bought'));

  const renderItem = ({ item }: { item: any }) => (
    <Card style={styles.wantCard}>
      <View style={styles.cardHeader}>
        <View style={styles.textContainer}>
          <BodyText style={styles.cardTitle} numberOfLines={1}>{item.name}</BodyText>
          <BodyText style={styles.cardPrice}>{item.price}</BodyText>
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
      </View>
      
      <View style={styles.cardFooter}>
        {item.daysLeft > 0 ? (
           <View style={styles.countdownBadge}>
             <Ionicons name="hourglass-outline" size={14} color={Colors.textMuted} />
             <Text style={styles.countdownText}>{item.daysLeft} days left</Text>
           </View>
        ) : (
          <Text style={[styles.countdownText, { color: Colors.accent }]}>Ready to decide</Text>
        )}
      </View>

      {activeTab === 'Ready' && (
        <View style={styles.actions}>
           <Button 
             title="Buy (Log it)" 
             variant="primary" 
             style={{ flex: 1 }} 
             onPress={() => {}} 
           />
           <Button 
             title="Not worth it" 
             variant="outline" 
             style={{ flex: 1 }} 
             onPress={() => {}} 
           />
        </View>
      )}
    </Card>
  );

  return (
    <ScreenView style={{ padding: 0 }}>
      <View style={styles.header}>
        <Title>Wants List</Title>
        <BodyText muted>Let your future self decide.</BodyText>
      </View>

      {/* Custom Segmented Control */}
      <View style={styles.tabsContainer}>
        {TABS.map(tab => (
          <Pressable 
            key={tab} 
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={filteredWants}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <BodyText muted>No items here yet.</BodyText>
          </View>
        }
      />

      <View style={styles.fabContainer}>
        <Button 
          title="Add New Want" 
          icon="add" 
          onPress={() => router.push('/add-want')}
          style={styles.fab}
        />
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: Colors.surface,
  },
  tabText: {
    color: Colors.textMuted,
    fontWeight: '500',
    fontSize: 14,
  },
  activeTabText: {
    color: Colors.textPrimary,
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  wantCard: {
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  cardPrice: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: '500',
    marginTop: 2,
  },
  tagContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    flexShrink: 0,
  },
  tagText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countdownBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  countdownText: {
    fontSize: 14,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 16,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: 40,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  fab: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  }
});