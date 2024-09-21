import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const shifts = [
  { id: '1', date: '4/6/2024', work: 'Mining', status: 'Success' },
  { id: '2', date: '6/6/2024', work: 'Drilling', status: 'Success' },
  { id: '3', date: '10/6/2024', work: 'Transport', status: 'Success' },
  { id: '4', date: '15/6/2024', work: 'Drilling', status: 'UnSuccess' },
  { id: '5', date: '20/6/2024', work: 'Mining', status: 'Success' },
];

const ViewShiftScreen_Worker = ({navigateTo}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Worker')}>
            <FontAwesome name="arrow-left" style={styles.backIcon} />
          </TouchableOpacity>
      <View style={styles.header}>
      
        <Text style={styles.headerText}>VIEW SHIFT</Text>
        <TouchableOpacity>
          <View style={styles.bellIcon} />
        </TouchableOpacity>
      </View>
    
      <Text style={styles.currentShiftText}>CURRENT SHIFT</Text>

      <View style={styles.shiftDetailsContainer}>
        <Text style={styles.shiftDetailsText}>SHIFT DETAILS</Text>
        <Text style={styles.detailItem}>Work Time: 4:00 AM - 5:00 PM</Text>
        <Text style={styles.detailItem}>Work Area: Drilling</Text>
        <Text style={styles.detailItem}>Safety Guidelines: 🟢</Text>
        <Text style={styles.detailItem}>Machine Conditions: 🟢</Text>
        <TouchableOpacity style={styles.checkInButton}>
          <Text style={styles.checkInButtonText}>CHECK IN</Text>
        </TouchableOpacity>
      </View>
    
      <View style={styles.paginationContainer}>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>PREV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>view all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shiftHistoryContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>S.NO</Text>
          <Text style={styles.tableHeaderText}>DATE</Text>
          <Text style={styles.tableHeaderText}>WORK</Text>
          <Text style={styles.tableHeaderText}>STATUS</Text>
        </View>

        <FlatList
          data={shifts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableRowText}>{item.id}.)</Text>
              <Text style={styles.tableRowText}>{item.date}</Text>
              <Text style={styles.tableRowText}>{item.work}</Text>
              <Text style={[styles.tableRowText, item.status === 'Success' ? styles.successStatus : styles.unsuccessStatus]}>
                {item.status}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Report</Text>
        <Text style={styles.navItem}>Alert</Text>
        <Text style={styles.navItem}>ERP</Text>
        <Text style={styles.navItem}>User</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f',
    paddingHorizontal: 20,
    paddingTop:5,
    paddingBottom:100
  },
  backButton: {
    marginRight: 10,
    marginTop:10
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bellIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ccc',
    borderRadius: 12,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  currentShiftText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
    textAlign: 'center',
  },
  shiftDetailsContainer: {
    backgroundColor: '#586279',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  shiftDetailsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  detailItem: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  checkInButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  paginationButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  paginationButtonText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  viewAllText: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'underline',
  },
  shiftHistoryContainer: {
    backgroundColor: '#586279',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableHeaderText: {
    color: '#ccc',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  tableRowText: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  successStatus: {
    color: '#90ee90',
  },
  unsuccessStatus: {
    color: '#ff6666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
   
    
  },
  navItem: {
    fontSize: 16,
  },
});

export default ViewShiftScreen_Worker;
