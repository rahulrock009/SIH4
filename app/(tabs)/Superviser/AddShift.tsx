import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get the width of the screen

const AddShiftScreen = ({navigateTo}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Supervisor')}>
            <FontAwesome name="arrow-left" style={styles.backIcon} />
          </TouchableOpacity>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.header}>ADD SHIFT</Text>

        <View style={styles.card}>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.label}>Code :</Text>
              <Text style={styles.value}>IT56</Text>
              <Text style={styles.label}>Employee name 1</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Work type :</Text>
              <Text style={styles.value}>Drilling</Text>
            </View>

            <View style={styles.taskContainer}>
              <Text style={styles.label}>Task :</Text>
              <Text style={styles.taskDescription}>
                Manage coal extraction, perform maintenance, enforce safety, and document operati....
              </Text>
            </View>

            <View style={styles.timeContainer}>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>09:00</Text>
              </View>
              <Text style={styles.arrow}>→</Text>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>10:00</Text>
              </View>
            </View>

            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Wednesday, August 28</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    marginRight: 10,
    marginTop:10
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    fontSize: width > 350 ? 32 : 24, // Dynamic font size based on screen width
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
    width: '100%',
    marginTop:30,
  },
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#4A5568',
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  value: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  taskContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#4A5568',
    borderRadius: 10,
  },
  taskDescription: {
    color: '#FFFFFF',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeBox: {
    width: '40%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A5568',
  },
  dateContainer: {
    padding: 15,
    backgroundColor: '#4A5568',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#4A5568',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  proceedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddShiftScreen;