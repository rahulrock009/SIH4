import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const ViewShiftScreen_S = ({navigateTo}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
         
      <StatusBar barStyle="dark-content" />

      {/* Top Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Supervisor')}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Shift</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Shift Details */}
      <View style={styles.shiftDetails}>
        <Text style={styles.shiftTime}>9:00PM – 11:00AM</Text>

        <View style={styles.employeeContainer}>
          {/* Worker Icon from React Native Paper */}
          <Avatar.Icon
            size={40}
            icon="account"
            style={styles.workerIcon}
          />
          <View>
            <Text style={styles.employeeName}>Employee name 1</Text>
            <Text style={styles.occupation}>Occupation 1</Text>
          </View>
        </View>

        <Text style={styles.shiftDescription}>
          Manage coal extraction, perform maintenance, enforce safety, and document operations.
        </Text>
      </View>

      {/* To-Do Section */}
      <View style={styles.todoContainer}>
        <Text style={styles.todoTitle}>To-Dos</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress}></View>
        </View>
      </View>

      {/* Next Shift Section */}
      <View style={styles.nextShift}>
        <Text style={styles.nextShiftTitle}>Next Shift:</Text>
        <Text style={styles.nextShiftDetails}>
          Shift Name: Morning Shift{'\n'}
          Time: 6:00 AM – 2:00 PM{'\n'}
          Responsibilities: Oversee coal extraction, perform maintenance, enforce safety, and document operations.{'\n'}
          Breaks: 30-minute lunch, two 15-minute breaks.{'\n'}
          Contacts: Supervisor, Safety Officer.
        </Text>
        <TouchableOpacity style={styles.modifyButton}>
          <Text style={styles.modifyButtonText}>Modify current shift</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F4F4F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  backText: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholder: {
    width: 30, // Helps center the header by balancing space
  },
  shiftDetails: {
    backgroundColor: '#4A5568',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  shiftTime: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  employeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  workerIcon: {
    backgroundColor: '#718096', // You can customize the icon background color here
    marginRight: 10,
  },
  employeeName: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  occupation: {
    color: '#D1D5DB',
    fontSize: 16,
  },
  shiftDescription: {
    color: '#D1D5DB',
    fontSize: 16,
    marginTop: 15,
  },
  todoContainer: {
    backgroundColor: '#CBD5E0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 5,
  },
  progress: {
    width: '45%',
    height: '100%',
    backgroundColor: '#4A5568',
    borderRadius: 5,
  },
  nextShift: {
    backgroundColor: '#4A5568',
    padding: 20,
    borderRadius: 10,
  },
  nextShiftTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  nextShiftDetails: {
    fontSize: 16,
    color: '#D1D5DB',
    marginBottom: 20,
    lineHeight: 22,
  },
  modifyButton: {
    backgroundColor: '#A0AEC0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  modifyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ViewShiftScreen_S;