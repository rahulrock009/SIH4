

// import React, { useContext, useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// // Get screen dimensions
// const { width: screenWidth } = Dimensions.get('window');

// // Function to determine if it's a large screen (e.g., desktop)
// const isLargeScreen = screenWidth > 768;

// const AddShiftScreen_M = ({ navigateTo }) => {
//   const [date, setDate] = useState('');
//   const { user } = useContext(UserContext);

//   const handleShiftAdd = async (shiftNumber) => {
//     if (user) {
//       try {
//         const res = await axios.post('http://localhost:3000/addshift', {
//           shiftNumber,
//           date,
//           userId: user._id,
//         });
//         console.log(res);
//         navigateTo('ShiftMembersScreen_M');
//       } catch (err) {
//         console.error('Error adding shift:', err);
//         Alert.alert('Error', 'Failed to add shift. Please try again.');
//       }
//     } else {
//       console.log(`User is not defined. Adding ${shiftNumber} shifts`);
//     }
//   };

//   const shiftButtons = [2, 3, 4, 5, 6, 7].map((shiftNumber) => (
//     <TouchableOpacity
//       key={shiftNumber}
//       style={styles.shiftButton}
//       onPress={() => handleShiftAdd(shiftNumber)}
//     >
//       <Text style={styles.shiftButtonText}>{shiftNumber}</Text>
//     </TouchableOpacity>
//   ));

//   return (
//     <View style={isLargeScreen ? styles.containerLarge : styles.container}>
//       <Text style={isLargeScreen ? styles.titleLarge : styles.title}>Add Shift</Text>
//       <View style={styles.con}>
//         <Text style={styles.date}>Date:</Text>
//         <TextInput
//           placeholder="Enter Date"
//           value={date}
//           onChangeText={setDate}
//           style={styles.tb}
//         />
//       </View>
//       <Text style={isLargeScreen ? styles.subtitleLarge : styles.subtitle}>
//         How Many Shifts Do You Want To Add?
//       </Text>
//       <View style={styles.shiftButtonsContainer}>{shiftButtons}</View>
//       <TouchableOpacity style={styles.addShiftButton} onPress={() => handleShiftAdd()}>
//         <Text style={styles.addShiftButtonText}>Add Shift</Text>
//       </TouchableOpacity>
//       <Text style={styles.customizeText}>Customize</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   con: {
//     display: 'flex',
//     marginBottom: 25,
//     width: '100%',
//   },
//   tb: {
//     padding: 10,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     width: '100%',
//     marginTop: 5,
//   },
//   date: {
//     fontSize: 20,
//     fontWeight: '400',
//     marginBottom: 5,
//   },
//   containerLarge: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 40,
//     maxWidth: 1200, // Restrict width on large screens
//     alignSelf: 'center', // Center content on large screens
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   titleLarge: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   subtitleLarge: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   shiftButtonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   shiftButton: {
//     backgroundColor: '#e0e0e0',
//     padding: isLargeScreen ? 15 : 10,
//     margin: 5,
//     borderRadius: 5,
//     width: 60,
//     alignItems: 'center',
//   },
//   shiftButtonText: {
//     fontSize: isLargeScreen ? 20 : 18,
//   },
//   addShiftButton: {
//     backgroundColor: '#4f5b77',
//     paddingVertical: isLargeScreen ? 20 : 15,
//     paddingHorizontal: isLargeScreen ? 60 : 40,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   addShiftButtonText: {
//     fontSize: isLargeScreen ? 20 : 18,
//     color: '#fff',
//   },
//   customizeText: {
//     fontSize: isLargeScreen ? 16 : 14,
//     color: '#666',
//   },
// });

// export default AddShiftScreen_M;


//want to take


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
       
        navigateTo('ShiftMembersScreen_M'); 
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
      <View style={styles.con}>
      <Text style={styles.date} >
        date:
      </Text>
      <TextInput
                    
                    placeholder="Enter Date"
                    value={date}
                    onChangeText={setDate}
                   style={styles.tb}
                />
</View>
      <Text style={isLargeScreen ? styles.subtitleLarge : styles.subtitle}>
        How Many Shifts Do You Want To Add?
      </Text>
      
      <View style={styles.shiftButtonsContainer}>{shiftButtons}</View>
      <TouchableOpacity style={styles.addShiftButton} onPress={() => handleShiftAdd()}>
        <Text style={styles.addShiftButtonText} >Add Shift</Text>
      </TouchableOpacity>
      <Text style={styles.customizeText}>Customize</Text>

<View>
     
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
  con:{
display:'flex',
marginBottom:25
  },
  tb:{
padding:10
  },
  date:{
fontSize:25,
fontWeight:400,
position:'absolute',
right:180,


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

// import React, { useContext, useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
// import { UserContext } from '../Login/UserContext';

// // Get screen dimensions
// const { width: screenWidth } = Dimensions.get('window');

// // Function to determine if it's a large screen (e.g., desktop)
// const isLargeScreen = screenWidth > 768;

// const AddShiftScreen_M = ({ navigateTo }) => {
//   const [date, setDate] = useState('');
//   const { user } = useContext(UserContext);

  
//   const handleShiftAdd = (shiftNumber) => {
//     if (user) {
//       navigateTo('ShiftMembersScreen_M', { shiftNumber, date, userId: user._id });
//     }
//   }
  
//   const shiftButtons = [2, 3, 4, 5, 6, 7].map((shiftNumber) => (
//     <TouchableOpacity
//       key={shiftNumber}
//       style={styles.shiftButton}
//       onPress={() => handleShiftAdd(shiftNumber)}
//     >
//       <Text style={styles.shiftButtonText}>{shiftNumber}</Text>
//     </TouchableOpacity>
//   ));

//   return (
//     <View style={isLargeScreen ? styles.containerLarge : styles.container}>
//       <Text style={isLargeScreen ? styles.titleLarge : styles.title}>Add Shift</Text>
//       <Text style={isLargeScreen ? styles.subtitleLarge : styles.subtitle}>
//         How Many Shifts Do You Want To Add?
//       </Text>
      
//       <View style={styles.shiftButtonsContainer}>{shiftButtons}</View>
      
//       <Text style={styles.customizeText}>Customize</Text>
//       <View>
//         <Text style={isLargeScreen ? styles.subtitleLarge : styles.subtitle}>
//           Date:
//         </Text>
//         <TextInput
//           placeholder="Enter Date"
//           value={date}
//           onChangeText={setDate}
//           style={styles.input}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   containerLarge: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 40,
//     maxWidth: 1200,
//     alignSelf: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   titleLarge: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   subtitleLarge: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   shiftButtonsContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   shiftButton: {
//     backgroundColor: '#e0e0e0',
//     padding: isLargeScreen ? 15 : 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   shiftButtonText: {
//     fontSize: isLargeScreen ? 20 : 18,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//     width: 200,
//   },
//   customizeText: {
//     fontSize: isLargeScreen ? 16 : 14,
//     color: '#666',
//   },
// });

// export default AddShiftScreen_M;

