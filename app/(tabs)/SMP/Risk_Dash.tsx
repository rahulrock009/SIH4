import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Sample data
const riskData = [
  { id: '1', type: 'Critical', severity: 'High', location: 'Mine A' },
  { id: '2', type: 'Ongoing', severity: 'Medium', location: 'Mine B' },
  { id: '3', type: 'Mitigated', severity: 'Low', location: 'Mine C' },
];

const RiskDashboard = ({ navigateTo }) => {
  // Function to handle "Add New Hazard" button press
  const handleAddNewHazard = () => {
    navigation.navigate('AddNewHazard'); // Navigate to the Add New Hazard page
  };

  // Render each risk item
  const renderRiskItem = ({ item }) => (
    <TouchableOpacity style={styles.riskItem} onPress={() => {/* Handle item press */}}>
      <Text style={styles.riskText}>{item.type} - {item.severity}</Text>
      <Text style={styles.riskText}>Location: {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} onPress={()=>navigateTo('smp')}>
         <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('smp')}>
          <Text onPress={()=>navigateTo('smp')}
           style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      <Text style={styles.header}>Risk Dashboard</Text>
      <Text style={{fontWeight:'bold',fontSize:20,marginBottom:6}}>Risk Summary</Text>
      <View style={styles.summaryCards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Critical Risks</Text>
          <Text style={styles.cardValue}>10 (High)</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ongoing Risks</Text>
          <Text style={styles.cardValue}>5 (Medium)</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mitigated Risks</Text>
          <Text style={styles.cardValue}>8 (Low)</Text>
        </View>
      </View>
      <FlatList
        data={riskData}
        renderItem={renderRiskItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.listHeader}>All Hazards</Text>}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAddNewHazard}  >
        <Text onPress={()=>navigateTo('addharzards')} style={styles.buttonText}>Add New Hazard</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  backText: {
    fontSize: 34,
    color: '#333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center'
  },
  summaryCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#586279',
    padding: 16,
    margin: 4,
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 14,
    marginTop: 8,
    color:'#FFFFFF'
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listContainer: {
    flexGrow: 1,
  },
  riskItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
  },
  riskText: {
    fontSize: 14,
  },
  
  button: {
    backgroundColor: '#586279',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
    marginTop:60
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center',
  },
});

export default RiskDashboard;