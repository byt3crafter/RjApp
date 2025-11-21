import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollScreen, Title, Subtitle, BodyText, Card, Button } from '../../components/ui';
import { Colors } from '../../constants/colors';

export default function PrioritiesScreen() {
  const priorities = [
    { id: '1', name: 'Emergency Fund', target: '$10,000', current: '$4,250', step: 'Auto-transfer $50 every Friday' },
    { id: '2', name: 'Trip to Japan', target: '$3,000', current: '$850', step: 'Save all coffee budget leftovers' },
  ];

  return (
    <ScrollScreen>
      <View style={styles.header}>
        <Title>Priorities</Title>
        <BodyText muted>Your real wealth goals.</BodyText>
      </View>

      {priorities.map(p => {
         // Simple progress calculation for visual
         const curr = parseInt(p.current.replace(/[^0-9]/g, ''));
         const tgt = parseInt(p.target.replace(/[^0-9]/g, ''));
         const pct = (curr / tgt) * 100;

         return (
          <Card key={p.id} style={styles.priorityCard}>
            <View style={styles.cardHeader}>
              <View style={styles.titleContainer}>
                <Subtitle numberOfLines={1} style={{ marginBottom: 0 }}>{p.name}</Subtitle>
              </View>
              <View style={styles.amountContainer}>
                <BodyText style={styles.amountText}>
                  {p.current} <BodyText muted style={{ fontSize: 14 }}>/ {p.target}</BodyText>
                </BodyText>
              </View>
            </View>
            
            {/* Progress Bar */}
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${pct}%` }]} />
            </View>

            <View style={styles.stepContainer}>
              <BodyText style={styles.tinyStepLabel}>TINY STEP</BodyText>
              <BodyText>{p.step}</BodyText>
            </View>
          </Card>
         );
      })}

      {priorities.length < 4 && (
        <Button 
          title="Add Priority" 
          variant="outline" 
          icon="add"
          onPress={() => {}} 
          style={{ marginTop: 10, borderStyle: 'dashed' }}
        />
      )}
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  priorityCard: {
    marginBottom: 16,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Align baseline
    marginBottom: 16,
    gap: 10,
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  amountContainer: {
    flexShrink: 0,
  },
  amountText: {
    color: Colors.accent,
    fontWeight: '600',
    fontSize: 18,
  },
  progressBg: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.accent,
    borderRadius: 4,
  },
  stepContainer: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    padding: 12,
    borderRadius: 10,
  },
  tinyStepLabel: {
    fontSize: 10,
    color: Colors.textMuted,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: 1,
  },
});