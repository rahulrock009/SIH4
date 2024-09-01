import React from 'react';
import { View, Text, TouchableOpacity,TextInput, StyleSheet, Dimensions, Platform ,  } from 'react-native';
import axios from 'axios';
import  { useContext, useState } from 'react';
import { UserContext } from '../Login/UserContext';

// Get screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Function to determine if it's a large screen (e.g., desktop)
const isLargeScreen = screenWidth > 768;

const AddShiftScreen_M = ({navigateTo}) => {
  const [date ,setDate] = useState('');
  const { user } = useContext(UserContext);
  const handleShiftAdd = (shiftNumber) => {
if(user){
    axios.post('http://localhost:3000/addshift', { shiftNumber ,date,userId: user._id})
      .then((res) => {
        console.log(res);
       
        navigateTo('edit_shift_m'); 
      })
      .catch((err) => {
        console.log(err);
             
      });
    }
    console.log(`Adding ${shiftNumber} shifts`);
    // Add your logic to handle shift addition
  };

  const shiftButtons = [2, 3, 4, 5, 6, 7].map((shiftNumber) => (
    <TouchableOpacity
      key={shiftNumber}
      style={styles.shiftButton}
      onPress={() => handleShiftAdd(shiftNumber)}
    >
      <Text style={styles.shiftButtonText}>{shiftNumber}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={isLargeScreen ? styles.containerLarge : styles.container}>
      <Text style={isLargeScreen ? styles.titleLarge : styles.title}>Add Shift</Text>
      <Text style={isLargeScreen ? styles.subtitleLarge : styles.subtitle}>
        How Many Shifts Do You Want To Add?
      </Text>
      
      <View style={styles.shiftButtonsContainer}>{shiftButtons}</View>
      <TouchableOpacity style={styles.addShiftButton} onPress={() => handleShiftAdd()}>
        <Text style={styles.addShiftButtonText} >Add Shift</Text>
      </TouchableOpacity>
      <Text style={styles.customizeText}>Customize</Text>

<View>
      <Text style={isLargeScreen ? styles.subtitleLarge : styles.subtitle}>
        date:
      </Text>
      <TextInput
                    
                    placeholder="Enter Date"
                    value={date}
                    onChangeText={setDate}
                   
                />
                </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerLarge: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    maxWidth: 1200, // Restrict width on large screens
    alignSelf: 'center', // Center content on large screens
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleLarge: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  subtitleLarge: {
    fontSize: 20,
    marginBottom: 30,
  },
  shiftButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  shiftButton: {
    backgroundColor: '#e0e0e0',
    padding: isLargeScreen ? 15 : 10, // Larger padding on larger screens
    margin: 5,
    borderRadius: 5,
  },
  shiftButtonText: {
    fontSize: isLargeScreen ? 20 : 18,
  },
  addShiftButton: {
    backgroundColor: '#4f5b77',
    paddingVertical: isLargeScreen ? 20 : 15,
    paddingHorizontal: isLargeScreen ? 60 : 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  addShiftButtonText: {
    fontSize: isLargeScreen ? 20 : 18,
    color: '#fff',
  },
  customizeText: {
    fontSize: isLargeScreen ? 16 : 14,
    color: '#666',
  },
});

export default AddShiftScreen_M;
