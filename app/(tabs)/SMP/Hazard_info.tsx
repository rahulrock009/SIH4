import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const HazardInformationScreen = ({navigateTo}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <Ionicons onPress={()=>navigateTo('smp')} name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Hazard Information</Text>
      </View>

      <View style={styles.hazardDetails}>
        <Text style={styles.hazardTitle}>Ladder Safety - 6ft</Text>
        <Text style={styles.hazardDescription}>
          This is a fall hazard. It has been rated as high risk.
        </Text>

        <View style={styles.hazardInfoRow}>
          <View style={styles.hazardInfoBox}>
            <Ionicons name="flag" size={24} color="#000000" />
            <Text style={styles.hazardInfoText}>Risk Level</Text>
            <Text style={styles.hazardInfoStatusHigh}>High</Text>
          </View>

          <View style={styles.hazardInfoBox}>
            <Ionicons name="checkmark" size={24} color="#000000" />
            <Text style={styles.hazardInfoText}>Status</Text>
            <Text style={styles.hazardInfoStatusOpen}>Open</Text>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit Hazard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add Control Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:45,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  hazardDetails: {
    flex: 1,
  },
  hazardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  hazardDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  hazardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  hazardInfoBox: {
    width: '48%',
    padding: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    alignItems: 'center',
  },
  hazardInfoText: {
    fontSize: 14,
    color: '#000000',
    marginTop: 10,
    marginBottom: 5,
  },
  hazardInfoStatusHigh: {
    fontSize: 14,
    color: '#FF0000',
  },
  hazardInfoStatusOpen: {
    fontSize: 14,
    color: '#FF6600',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    width: '48%',
    paddingVertical: 15,
    backgroundColor: '#5A667A',
    borderRadius: 10,
    alignItems: 'center',
  },
  addButton: {
    width: '48%',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 0, 0, 0.5)' ,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HazardInformationScreen;