import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';

const workers = [
  { id: '1', name: 'Daffa Naufal', workId: 'work1', shifts: { Mon: '9.00 - 5.00 management', Tue: '9.00 - 5.00 management' } },
  { id: '2', name: 'Shakir Ramzi', workId: 'work2', shifts: { Mon: '', Tue: '9.00 - 5.00 management' } },
  { id: '3', name: 'Zara Annisa', workId: 'work3', shifts: { Mon: '9.00 - 5.00 management', Tue: '9.00 - 5.00 management' } },
  { id: '4', name: 'Chris Evans', workId: 'work4', shifts: { Mon: '9.00 - 5.00 management', Tue: '' } },
  { id: '5', name: 'Jack Miller', workId: 'work5', shifts: { Mon: '', Tue: '9.00 - 5.00 management' } },
];

const ShiftManagementScreen = ({navigateTo}) => {
  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Manager')}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workers Shifts</Text>
      </View>
      
      <TextInput 
        style={styles.searchBar} 
        placeholder="Search..."
      />

      <View style={styles.tableHeader}>
        <Text style={[styles.columnHeader, styles.workerColumn]}>Worker</Text>
        <Text style={[styles.columnHeader, styles.dayColumn]}>Mon</Text>
        <Text style={[styles.columnHeader, styles.dayColumn]}>Tue</Text>
      </View>

      <FlatList
        data={workers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.workerInfo}>
              <Image
                style={styles.avatar}
              />
              <View>
                <Text style={styles.workerName}>{item.name}</Text>
                <Text style={styles.workerId}>{item.workId}</Text>
              </View>
            </View>
            <View style={styles.shiftColumn}>
              <Text style={[styles.shift, item.shifts.Mon ? styles.shiftFilled : styles.shiftEmpty]}>
                {item.shifts.Mon}
              </Text>
            </View>
            <View style={styles.shiftColumn}>
              <Text style={[styles.shift, item.shifts.Tue ? styles.shiftFilled : styles.shiftEmpty]}>
                {item.shifts.Tue}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={styles.addNewEmployee}>
        <Text style={styles.addEmployeeText}>+ Add new employee</Text>
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
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  backText: {
    fontSize: 24,
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:40
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  searchBar: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  columnHeader: {
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
  },
  workerColumn: {
    flex: 2,
  },
  dayColumn: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  workerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  workerName: {
    fontWeight: 'bold',
  },
  workerId: {
    color: '#888',
  },
  shiftColumn: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shift: {
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    width: '90%',
  },
  shiftFilled: {
    backgroundColor: '#90ee90', // light green
    color: '#000',
  },
  shiftEmpty: {
    backgroundColor: '#d3d3d3', // light gray
    color: '#000',
  },
  addNewEmployee: {
    padding: 20,
    alignItems: 'center',
  },
  addEmployeeText: {
    color: '#555',
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

export default ShiftManagementScreen;
