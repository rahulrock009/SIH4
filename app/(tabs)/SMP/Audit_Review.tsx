import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const AuditDashboard = () => {
  const [auditSummary, setAuditSummary] = useState({
    passed: 10,
    failed: 3,
    pending: 2
  });

  const [auditList, setAuditList] = useState([
    { id: '1', cycle: 'Audit Cycle 1', status: 'Passed' },
    { id: '2', cycle: 'Audit Cycle 2', status: 'Failed' },
    { id: '3', cycle: 'Audit Cycle 3', status: 'Pending' },
    { id: '4', cycle: 'Audit Cycle 4', status: 'Passed' }
  ]);

  const startNewAudit = () => {
    // Logic to start a new audit goes here
    alert('Starting new audit...');
  };

  const renderAuditItem = ({ item }) => (
    <View style={styles.auditItem}>
      <Text style={styles.auditText}>{item.cycle}</Text>
      <Text style={styles.auditStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Audit & Reviews</Text>

      {/* Audit Summary Section */}
      <View style={styles.summarySection}>
  <Text style={styles.summaryHeader}>Audit Summary:</Text>

  {/* Row for Passed and Failed */}
  <View style={styles.row}>
    <View style={styles.summaryBlock}>
      <Text style={styles.blockText}>Passed: {auditSummary.passed}</Text>
    </View>
    <View style={styles.summaryBlock}>
      <Text style={styles.blockText}>Failed: {auditSummary.failed}</Text>
    </View>
  </View>

  {/* Block for Pending */}
  <View style={styles.pendingBlock}>
    <Text style={ styles.blockText1}>Pending: {auditSummary.pending}</Text>
  </View>
</View>


      {/* Audit List Section */}
      <View style={styles.listSection}>
        <Text style={styles.listHeader}>Audit List:</Text>
        <FlatList
          data={auditList}
          keyExtractor={(item) => item.id}
          renderItem={renderAuditItem}
        />
      </View>

      {/* Button to Start New Audit */}
      <TouchableOpacity style={styles.button} onPress={startNewAudit}>
        <Text style={styles.buttonText}>Start New Audit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  summarySection: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  summaryHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row', // Places Passed and Failed side by side
    justifyContent: 'space-between', // Ensures spacing between the blocks
    marginBottom: 10,
  },
  summaryBlock: {
    backgroundColor: '#e0e0e0',
    padding: 25,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    
    flex: 1, // Makes both blocks take up equal width
    marginHorizontal: 5, // Adds space between Passed and Failed
  },
  pendingBlock: {
    minHeight: 90, // Increases the height of the Pending block only
    backgroundColor: '#e0e0e0',
    padding: 25,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    
    
  },
  blockText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', // Centers the text in the block
    color: '#000'
  },
  blockText1: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },

  listSection: {
    flex: 1,
    marginBottom: 20,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  auditItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  auditText: {
    fontSize: 16,
  },
  auditStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#586279',
  },
  button: {
    backgroundColor: '#586279',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuditDashboard;