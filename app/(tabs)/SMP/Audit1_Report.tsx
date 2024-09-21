import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';

const AuditReport = () => {
  const [auditResults, setAuditResults] = useState([
    { hazard: 'Fire Hazard', compliance: 'Compliant', comments: 'All fire extinguishers are operational.' },
    { hazard: 'Chemical Hazard', compliance: 'Non-Compliant', comments: 'Chemical storage not properly labeled.' },
    { hazard: 'Electrical Hazard', compliance: 'Compliant', comments: 'Wiring and equipment are up to standards.' },
  ]);

  const exportReport = () => {
    // Logic to export the report can be handled here
    console.log('Exporting report...', auditResults);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Audit Report</Text>

      {auditResults.map((result, index) => (
        <View key={index} style={styles.reportItem}>
          <Text style={styles.hazardText}>Hazard: {result.hazard}</Text>
          <Text style={styles.complianceText}>Compliance Level: {result.compliance}</Text>
          <Text style={styles.commentText}>Comments: {result.comments}</Text>
        </View>
      ))}

      {/* Export Report Button */}
      <TouchableOpacity style={styles.button} onPress={exportReport}>
        <Text style={styles.buttonText}>Export Report</Text>
      </TouchableOpacity>
    </ScrollView>
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
  reportItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  hazardText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  complianceText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#586279',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 60, // Moves the button down
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuditReport;