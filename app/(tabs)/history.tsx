import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ScreenView, Title, Subtitle, BodyText, Card } from '../../components/ui';
import { Colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryScreen() {
  const weeks = [
    { id: '1', range: 'Oct 16 - Oct 22', total: '$420.50', impulse: '$85.00', planned: '$335.50', supported: 3, wants: '+2 added' },
    { id: '2', range: 'Oct 9 - Oct 15', total: '$310.20', impulse: '$22.00', planned: '$288.20', supported: 5, wants: '+1 discarded' },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <Card style={styles.historyCard}>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1, marginRight: 12 }}>
            <Subtitle style={{ fontSize: 18, marginBottom: 0 }} numberOfLines={1}>{item.range}</Subtitle>
          </View>
          <View style={styles.totalBadge}>
            <BodyText style={styles.totalText}>{item.total}</BodyText>
          </View>
        </View>

        <View style={styles.statRow}>
          <View style={styles.stat}>
            <BodyText muted style={styles.statLabel}>IMPULSE</BodyText>
            <BodyText style={{ color: Colors.error }}>{item.impulse}</BodyText>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.stat}>
             <BodyText muted style={styles.statLabel}>PLANNED</BodyText>
             <BodyText style={{ color: Colors.textPrimary }}>{item.planned}</BodyText>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.stat}>
             <BodyText muted style={styles.statLabel}>PRIORITY HITS</BodyText>
             <BodyText style={{ color: Colors.accent }}>{item.supported}</BodyText>
          </View>
        </View>

        <View style={styles.suggestionBox}>
          <Ionicons name="bulb-outline" size={16} color={Colors.accent} />
          <BodyText style={styles.suggestionText}>
             Impulses down 15% from last week. Great job on the coffee budget!
          </BodyText>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <ScreenView>
      <View style={styles.header}>
        <Title>History</Title>
      </View>
      <FlatList
        data={weeks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  listContent: {
    padding: 20,
  },
  historyCard: {
    marginBottom: 16,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 12,
  },
  totalBadge: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    flexShrink: 0,
  },
  totalText: {
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  verticalLine: {
    width: 1,
    backgroundColor: Colors.border,
    height: '100%',
  },
  statLabel: {
    fontSize: 10,
    marginBottom: 4,
    fontWeight: '600',
  },
  suggestionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accentDim,
    padding: 10,
    borderRadius: 8,
    gap: 8,
  },
  suggestionText: {
    fontSize: 13,
    color: Colors.accent,
    flex: 1,
  },
});