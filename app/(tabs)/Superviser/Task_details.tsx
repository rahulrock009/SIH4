import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const taskDetails = {
  supervisor: {
    name: 'Majid',
    shift: 'Day Shift',
    role: 'Supervisor',
    timing: '8 am - 2pm',
    status: 'on going',
  },
  workers: [
    {
      estimateNumber: 'EST - 001',
      worker: 'Thamil',
      charge: 9.0,
      progress: 'completed',
      checkIn: '08:00 AM',
      checkOut: '02:00 PM',
    },
    {
      estimateNumber: 'EST - 002',
      worker: 'Rahul',
      charge: 6.3,
      progress: 'ongoing',
      checkIn: '08:15 AM',
      checkOut: '02:15 PM',
    },
    {
      estimateNumber: 'EST - 003',
      worker: 'Shasty',
      charge: 10.0,
      progress: 'yet to come',
      checkIn: '07:45 AM',
      checkOut: '01:45 PM',
    },
    {
      estimateNumber: 'EST - 090',
      worker: 'Ravi',
      charge: 8.0,
      progress: 'ongoing',
      checkIn: '08:00 AM',
      checkOut: '02:30 PM',
    },
    {
      estimateNumber: 'EST - 010',
      worker: 'Raj',
      charge: 7.0,
      progress: 'yet to come',
      checkIn: '08:40 AM',
      checkOut: '02:40 PM',
    },
  ],
};

const TaskDetailsScreen = ({navigateTo}) => {
  const getStatusStyle = (progress) => {
    switch (progress) {
      case 'completed':
        return { backgroundColor: '#8ffc83', color: '#fff' };
      case 'ongoing':
        return { backgroundColor: '#f7f25c', color: '#242424' };
      case 'yet to come':
        return { backgroundColor: '#fa7d73', color: '#fff' };
      default:
        return { backgroundColor: '#777', color: '#fff' };
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back button */}
      <View style={styles.backButton} >
        <Ionicons onPress={()=>navigateTo('Supervisor')}
         name="arrow-back" size={24} color="#333" />
      </View>

      {/* Task Details */}
      <View style={styles.taskDetailsContainer}>
        <Text style={styles.taskTitle}>Task Details</Text>
        <View style={styles.tabMenu}>
          <View style={styles.tabItem}>
            <Ionicons name="people" size={20} color="#777" />
            <Text style={styles.tabText}>Employees</Text>
          </View>
          <View style={styles.tabItem}>
            <Ionicons name="clipboard" size={20} color="#777" />
            <Text style={styles.tabText}>Task Overview</Text>
          </View>
          <View style={styles.tabItem}>
            <Ionicons name="construct" size={20} color="#777" />
            <Text style={styles.tabText}>Equip Status</Text>
          </View>
        </View>
        <View style={styles.supervisorContainer}>
          <Text style={styles.supervisorText}>
            Name : {taskDetails.supervisor.name}
          </Text>
          <Text style={styles.supervisorText}>
            Shift : {taskDetails.supervisor.shift}
          </Text>
          <Text style={styles.supervisorText}>
            Role : {taskDetails.supervisor.role}
          </Text>
          <Text style={styles.supervisorText}>
            Timing : {taskDetails.supervisor.timing}
          </Text>
          <View style={styles.statusRow}>
            <Text style={styles.supervisorText}>Status : {taskDetails.supervisor.status}</Text>
            <View style={[styles.statusIndicator, { backgroundColor: '#4CAF50' }]} />
          </View>
        </View>
      </View>

      {/* Title and View All Button */}
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Task Progress</Text>
        <Button title="View All" onPress={() => {}} />
      </View>

      {/* Workers */}
      <View style={styles.workersContainer}>
        <ScrollView horizontal={true}>
          <View>
            {/* Column Titles */}
            <View style={styles.workerHeaderRow}>
              <Text style={[styles.workerHeaderText, styles.columnEstimateNumber]}>Estimate Number</Text>
              <Text style={[styles.workerHeaderText, styles.columnWorker]}>Worker</Text>
              <Text style={[styles.workerHeaderText, styles.columnCharge]}>Charge</Text>
              <Text style={[styles.workerHeaderText, styles.columnCheckIn]}>Check-In</Text>
              <Text style={[styles.workerHeaderText, styles.columnCheckOut]}>Check-Out</Text>
              <Text style={[styles.workerHeaderText, styles.columnProgress]}>Progress</Text>
            </View>

            {/* Worker Data */}
            {taskDetails.workers.map((item) => (
              <View key={item.estimateNumber} style={styles.workerRow}>
                <Text style={[styles.workerText, styles.columnEstimateNumber]}>{item.estimateNumber}</Text>
                <Text style={[styles.workerText, styles.columnWorker]}>{item.worker}</Text>
                <Text style={[styles.workerText, styles.columnCharge]}>{item.charge.toFixed(1)}</Text>
                <Text style={[styles.workerText, styles.columnCheckIn]}>{item.checkIn}</Text>
                <Text style={[styles.workerText, styles.columnCheckOut]}>{item.checkOut}</Text>
                <View style={styles.workerProgressContainer}>
                  <Text style={[styles.workerProgressText, getStatusStyle(item.progress)]}>
                    {item.progress.toUpperCase()}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  backButton: {
    marginBottom: 10,
    marginLeft: 20,
  },
  taskDetailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  supervisorContainer: {
    backgroundColor: '#46687F',
    padding: 20,
    borderRadius: 10,
  },
  supervisorText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workersContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  workerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 700,
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  workerHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  workerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 700,
    paddingVertical: 10,
  },
  workerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  workerProgressContainer: {
    width: 150, // Fixed width for consistent size
    height: 40, // Fixed height for consistent size
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  workerProgressText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    textAlign: 'center',
    width: '100%',
  },
  columnEstimateNumber: {
    width: 120,
    textAlign: 'center',
  },
  columnWorker: {
    width: 100,
    textAlign: 'center',
  },
  columnCharge: {
    width: 80,
    textAlign: 'center',
  },
  columnCheckIn: {
    width: 120,
    textAlign: 'center',
  },
  columnCheckOut: {
    width: 120,
    textAlign: 'center',
  },
  columnProgress: {
    width: 150,
    textAlign: 'center',
  },
});

export default TaskDetailsScreen;