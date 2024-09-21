// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [supervisors, setSupervisors] = useState([]);
//   const [workers, setWorkers] = useState([]);
//   const [count, setCount] = useState(0);
//   const [selectedValue, setSelectedValue] = useState('');
//   const [date, setDate] = useState('');
//   const [task, setTask] = useState('');

//   useEffect(() => {
//     const fetchLastShiftUser = async () => {
//       try {
//         const res = await axios.get('http://192.168.22.132:3000/last_shift_user');
//         if (res.data.success) {
//           setSupervisors(res.data.supervisors || []); // Add default values
//           setWorkers(res.data.workers || []); // Add default values
//         } else {
//           console.log(res.data.message);
//         }
//       } catch (err) {
//         console.error('Error fetching last shift user:', err);
//         Alert.alert('Error', 'Failed to fetch shift users. Please try again.');
//       }
//     };

//     fetchLastShiftUser();
//   }, []);

//   useEffect(() => {
//     const fetchShiftDetails = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://192.168.22.132:3000/addshift', { params: { userId: user._id } });
//           console.log('API Response:', res.data);
//           if (res.data.success) {
//             setCount(res.data.lastShiftNumber || 0); // Use a default value
//             setDate(res.data.lastShiftDate || ''); // Use a default value
//           } else {
//             console.log(res.data.message);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching shift details:', err);
//         Alert.alert('Error', 'Failed to fetch shift details. Please try again.');
//       }
//     };

//     fetchShiftDetails();
//   }, [user]);

//   const handleDonePress = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/addshift1', {
//         date,
//         shiftNumber: selectedValue,
//         supervisors,
//         workers,
//         task,
//       });

//       const response2 = await axios.post('http://localhost:3000/addsupervisortask', {
//         date,
//         shiftNumber: selectedValue,
//         supervisors,
//         workers,
//         task,
//       });

//       console.log('API Response:', response.data);
//       console.log('API Response:', response2.data);

//       if (response.data.success) {
//         navigateTo('NextScreen', { supervisors, workers, selectedValue });
//       } else {
//         console.log('Error:', response.data.message);
//         Alert.alert('Error', response.data.message || 'Something went wrong.');
//       }
//     } catch (err) {
//       console.error('Error posting shift details:', err);
//       Alert.alert('Error', 'Failed to save shift details. Please try again.');
//     }
//   };

//   const renderMembers = (members) => {
//     return members.map((member, index) => (
//       <View key={index} style={styles.memberContainer}>
//         <View style={styles.avatarPlaceholder}></View>
//         <Text style={styles.memberName}>{member.emp_name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisors</Text>
//           <View>
//             <Text style={styles.shift}>Shift_Number</Text>
//             {count > 1 && (
//               <Picker
//                 selectedValue={selectedValue}
//                 style={styles.picker}
//                 onValueChange={(itemValue) => setSelectedValue(itemValue)}
//               >
//                 {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                   <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//                 ))}
//               </Picker>
//             )}
//           </View>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} onPress={() => navigateTo('show_user')}>Add Members</Text>
//             <Text style={styles.seeAll}>See all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(supervisors)}
//           <TouchableOpacity style={styles.addButton}></TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Workers</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount}>Add Members</Text>
//             <Text style={styles.seeAll}>See all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(workers)}
//           <TouchableOpacity style={styles.addButton}></TouchableOpacity>
//         </View>
//       </View>

//       <View style={{ display: 'flex' }}>
//         <Text style={styles.tx}>Task:</Text>
//         <TextInput
//           style={styles.in}
//           placeholder="Enter Task"
//           value={task}
//           onChangeText={setTask}
//         />
//       </View>

//       <TouchableOpacity style={styles.doneButton} >
//         <Text style={styles.doneButtonText} onPress={()=>navigateTo('Manager')}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   in: {
//     padding: 15,
//   },
//   tx: {
//     fontSize: 20,
//     fontWeight: '400',
//     marginRight: 200,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   shift: {
//     fontSize: 15,
//     padding: 7,
//     fontWeight: '500',
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//     marginTop: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 17,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 15,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
//   picker: {
//     height: 40,
//     width: 100,
//   },
// });

// export default ShiftMembersScreen_M;


//want to take 


import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,TextInput,StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure this package is installed
import axios from 'axios';
import { UserContext } from '../Login/UserContext';

const ShiftMembersScreen_M = ({ navigateTo }) => {
  const { user } = useContext(UserContext);
  const [supervisors, setSupervisors] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [count, setCount] = useState(0); // Store the shift count
  const [selectedValue, setSelectedValue] = useState(''); // Store the selected shift
  const [date, setDate] = useState('');
  const [task, setTask] = useState('');

  useEffect(() => {
    const fetchLastShiftUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/last_shift_user');
        if (res.data.success) {
          setSupervisors(res.data.supervisors);
          setWorkers(res.data.workers);
        } else {
          console.log(res.data.message);
        }
      } catch (err) {
        console.error('Error fetching last shift user:', err);
      }
    };

    fetchLastShiftUser();
  }, []);

  useEffect(() => {
    const fetchShiftDetails = async () => {
      try {
        if (user) {
          const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
          console.log('API Response:', res.data); // Debugging line

          if (res.data.success) {
            setCount(res.data.lastShiftNumber);
            setDate(res.data.lastShiftDate); // Set the last shift number
          } else {
            console.log(res.data.message);
          }
        }
      } catch (err) {
        console.error('Error fetching shift details:', err);
      }
    };

    fetchShiftDetails();
  }, [user]);

  const handleDonePress = async () => {
    try {
      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

      const response = await axios.post('http://localhost:3000/addshift1', {
        // date: currentDate,
        date :date,
        shiftNumber: selectedValue, // Selected shift number from the dropdown
        supervisors,
        workers,
        task,
      });
     

      const response2 = await axios.post('http://localhost:3000/addsupervisortask', {
        // date: currentDate,
        date :date,
        shiftNumber: selectedValue, // Selected shift number from the dropdown
        supervisors,
        workers,
  
        task,
      });
      console.log('API Response:', response.data);
      console.log('API Response:', response2.data);

      if (response.data.success) {
        // Handle success, like navigating to another screen or showing a success message
        // navigateTo('NextScreen', { supervisors, workers, selectedValue });
        navigateTo('Manager');
      } else {
        // Handle the error response from the server
        console.log('Error:', response.data.message);
      }
    } catch (err) {
      console.error('Error posting shift details:', err);
    }
  };

  const renderMembers = (members) => {
    return members.map((member, index) => (
      <View key={index} style={styles.memberContainer}>
        <View style={styles.avatarPlaceholder}></View>
        <Text style={styles.memberName}>{member.emp_name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shift Members</Text>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Supervisors</Text>
          <View>
          <Text style={styles.shift}>Shift_Number</Text>
          {count > 1 && (
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
                <Picker.Item key={value} label={value.toString()} value={value.toString()} />
              ))}
            </Picker>
          )}
          </View>
          <View style={styles.sectionHeaderRight}>
            <Text style={styles.memberCount} onPress={() => navigateTo('show_user')}>Add Members</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          
        </View>
        <View style={styles.membersRow}>
          {renderMembers(supervisors)}
          <TouchableOpacity style={styles.addButton}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Workers</Text>
          <View style={styles.sectionHeaderRight}>
            <Text style={styles.memberCount}>Add Members</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
        </View>
        <View style={styles.membersRow}>
          {renderMembers(workers)}
          <TouchableOpacity style={styles.addButton}></TouchableOpacity>
        </View>
      </View>
      <View style={{display:'flex'}}>
      <Text style={styles.tx}>Task:</Text>
      <TextInput style={styles.in}
                    
                    placeholder="Enter Task"
                    value={task}
                    onChangeText={setTask}
                   
                />
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={handleDonePress} // Handle the button press
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  in:{
padding:15
  },
  tx:{
fontSize:20,
fontWeight:400,
marginRight:200
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  shift:{
fontSize:15,
padding:7,
fontWeight:500,


  },
  sectionContainer: {
    width: '100%',
    marginBottom: 30,
    marginTop:20
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight:0
    
  },
  sectionHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberCount: {
    fontSize: 14,
    marginRight: 15,
    
  },
  seeAll: {
    fontSize: 15,
    color: '#888',
  },
  membersRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatarPlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
  },
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButton: {
    marginTop: 40,
    backgroundColor: '#4f5b77',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  doneButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  picker: {
    height: 30,
    width: 60,
    marginLeft:20 // Adjust the width as needed
  },
});

export default ShiftMembersScreen_M;


//import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Ensure this package is installed
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [supervisors, setSupervisors] = useState([]);
//   const [workers, setWorkers] = useState([]);
//   const [count, setCount] = useState(0);
//   const [selectedValue, setSelectedValue] = useState('');
//   const [date, setDate] = useState('');
//   const [task, setTask] = useState('');

//   useEffect(() => {
//     const fetchLastShiftUser = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/last_shift_user');
//         if (res.data.success) {
//           setSupervisors(res.data.supervisors);
//           setWorkers(res.data.workers);
//         } else {
//           console.log(res.data.message);
//         }
//       } catch (err) {
//         console.error('Error fetching last shift user:', err);
//       }
//     };

//     fetchLastShiftUser();
//   }, []);

//   useEffect(() => {
//     const fetchShiftDetails = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
//           if (res.data.success) {
//             setCount(res.data.lastShiftNumber);
//             setDate(res.data.lastShiftDate);
//           } else {
//             console.log(res.data.message);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching shift details:', err);
//       }
//     };

//     fetchShiftDetails();
//   }, [user]);

//   const handleDonePress = async () => {
//     try {
//       const response = await axios.post('http:localhost:3000/addshift1', {
//         date,
//         shiftNumber: selectedValue,
//         supervisors,
//         workers,
//         task,
//       });

//       if (response.data.success) {
//         navigateTo('NextScreen', { supervisors, workers, selectedValue });
//       } else {
//         console.log('Error:', response.data.message);
//       }
//     } catch (err) {
//       console.error('Error posting shift details:', err);
//     }
//   };
//   const handledone = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/addsupervisortask', {
//         date,
//         shiftNumber: selectedValue,
//         supervisors,
//         workers,
//         task,
//       });
  
//       if (response.data.success) {
//         navigateTo('NextScreen', { supervisors, workers, selectedValue });
//       } else {
//         console.log('Error:', response.data.message);
//       }
//     } catch (err) {
//       console.error('Error posting shift details:', err);
//     }
//   };
  
//   // const handledone = async () => {
//   //   try {
//   //     const response = await axios.post('http://localhost:3000/addsupervisortask', {
//   //       date,
//   //       shiftNumber: selectedValue,
//   //       supervisors,
//   //       workers,
//   //       task,
//   //     });

//   //     if (response.data.success) {
//   //       navigateTo('NextScreen', { supervisors, workers, selectedValue });
//   //     } else {
//   //       console.log('Error:', response.data.message);
//   //     }
//   //   } catch (err) {
//   //     console.error('Error posting shift details:', err);
//   //   }
//   // };

//   const renderMembers = (members) => {
//     return members.map((member, index) => (
//       <View key={index} style={styles.memberContainer}>
//         <View style={styles.avatarPlaceholder}></View>
//         <Text style={styles.memberName}>{member.emp_name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisors</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} onPress={() => navigateTo('show_user')}>Add Members</Text>
//             <Text style={styles.seeAll}>See all</Text>
//           </View>
//           {count > 1 && (
//             <Picker
//               selectedValue={selectedValue}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             >
//               {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                 <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//               ))}
//             </Picker>
//           )}
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(supervisors)}
//           <TouchableOpacity style={styles.addButton}></TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Workers</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount}>Add Members</Text>
//             <Text style={styles.seeAll}>See all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(workers)}
//           <TouchableOpacity style={styles.addButton}></TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         <Text>Task:</Text>
//         <TextInput
//           placeholder="Enter Task"
//           value={task}
//           onChangeText={setTask}
//         />
//       </View>

//       <TouchableOpacity
//         style={styles.doneButton}
//         onPress={handleDonePress} // Use handleDonePress or handledone based on your requirements
//       >
//         <Text style={styles.doneButtonText}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 14,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
//   picker: {
//     height: 50,
//     width: 150,
//   },
// });

// export default ShiftMembersScreen_M;



// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Ensure this package is installed
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [supervisors, setSupervisors] = useState([]);
//   const [workers, setWorkers] = useState([]);
//   const [count, setCount] = useState(0); // Store the shift count
//   const [selectedValue, setSelectedValue] = useState(''); // Store the selected shift

//   useEffect(() => {
//     const fetchLastShiftUser = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/last_shift_user');
//         if (res.data.success) {
//           setSupervisors(res.data.supervisors);
//           setWorkers(res.data.workers);
//         } else {
//           console.log(res.data.message);
//         }
//       } catch (err) {
//         console.error('Error fetching last shift user:', err);
//       }
//     };

//     fetchLastShiftUser();
//   }, []);

//   useEffect(() => {
//     const fetchShiftDetails = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
//           console.log('API Response:', res.data); // Debugging line

//           if (res.data.success) {
//             setCount(res.data.lastShiftNumber); // Set the last shift number
//           } else {
//             console.log(res.data.message);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching shift details:', err);
//       }
//     };

//     fetchShiftDetails();
//   }, [user]);


  
//           axios.post('http://localhost:3000/addshift', { date ,supervisors,workers });
//           console.log('API Response:', res.data); // Debugging line

          
//       } catch (err) {
//         console.error('Error fetching shift details:', err);
//       }
//     };

//     fetchShiftDetails();


//   const renderMembers = (members) => {
//     return members.map((member, index) => (
//       <View key={index} style={styles.memberContainer}>
//         <View style={styles.avatarPlaceholder}></View>
//         <Text style={styles.memberName}>{member.emp_name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisors</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} onPress={() => navigateTo('show_user')}>Add Members</Text>
//             <Text style={styles.seeAll}>See all</Text>
//           </View>
//           {count > 1 && (
//             <Picker
//               selectedValue={selectedValue}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             >
//               {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                 <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//               ))}
//             </Picker>
//           )}
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(supervisors)}
//           <TouchableOpacity style={styles.addButton}></TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Workers</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount}>Add Members</Text>
//             <Text style={styles.seeAll}>See all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(workers)}
//           <TouchableOpacity style={styles.addButton}></TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity
//         style={styles.doneButton}
//         onPress={() => navigateTo('NextScreen', { supervisors, workers, selectedValue })}
//       >
//         <Text style={styles.doneButtonText}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center', // Aligns the picker to the center vertically
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   picker: {
//     height: 50,
//     width: 150, // Adjust the width as needed
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 14,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

// export default ShiftMembersScreen_M;


// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Ensure this package is installed
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';


// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [members, setMembers] = useState([]); // Ensure it's an array initially
//   const [count, setCount] = useState([]);
//   const [selectedValue, setSelectedValue] = useState('');
//   const [CC, setCC] = useState('');

//   useEffect(() => {
//   const fetchMembers = async () => {
//     try {
//       if (user) {
//         const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
//         console.log('API Response:', res.data); // Debugging line

//         if (res.data.success) {
//           setMembers(Array.isArray(res.data.members) ? res.data.members : []); // Ensure it's an array
//           setCount(res.data.lastShiftNumber);

//           // Access last shift date and shift number
//           console.log('Last Shift Date:', res.data.lastShiftDate);
//           console.log('Last Shift Number:', res.data.lastShiftNumber);
//         } else {
//           console.log(res.data.message);
//         }
//       }
//     } catch (err) {
//       console.error('Error fetching shift members:', err);
//     }
//   };

//   fetchMembers();
// }, [user]);


 


//   const renderMembers = (members) => {
//     if (!Array.isArray(members)) {
//       return <Text>No members available</Text>;
//     }

//     return members.map((member, index) => (
//       <View key={index} style={styles.memberContainer}>
//         <View style={styles.avatarPlaceholder}></View>
//         <Text style={styles.memberName}>{member.name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisor</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} onPress={()=>navigateTo('show_user')}>ADD Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>

           

//           {count > 1 && (
//             <Picker
//               selectedValue={selectedValue}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             >
//               {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                 <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//               ))}

//             </Picker>

//           )}
//         </View>
//         <View style={styles.membersRow}>
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon if needed */}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Worker</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} >Add Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(members)}
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon if needed */}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity
//         style={styles.doneButton}
//         onPress={() => navigateTo('NextScreen', { members, count, selectedValue })}
//       >
//         <Text style={styles.doneButtonText}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center', // Aligns the picker to the center vertically
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   picker: {
//     height: 50,
//     width: 150, // Adjust the width as needed
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 14,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

// export default ShiftMembersScreen_M;





// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Ensure this package is installed
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';


// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [members, setMembers] = useState([]); // Ensure it's an array initially
//   const [count, setCount] = useState('');
//   const [selectedValue, setSelectedValue] = useState('');


//   useEffect(() => {
//   const fetchMembers = async () => {
//     try {
//       if (user) {
//         const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
//         console.log('API Response:', res.data); // Debugging line

//         if (res.data.success) {
//           setMembers(Array.isArray(res.data.members) ? res.data.members : []); // Ensure it's an array
//           setCount(res.data.count);

//           // Access last shift date and shift number
//           console.log('Last Shift Date:', res.data.lastShiftDate);
//           console.log('Last Shift Number:', res.data.lastShiftNumber);
//         } else {
//           console.log(res.data.message);
//         }
//       }
//     } catch (err) {
//       console.error('Error fetching shift members:', err);
//     }
//   };

//   fetchMembers();
// }, [user]);



//   const renderMembers = (members) => {
//     if (!Array.isArray(members)) {
//       return <Text>No members available</Text>;
//     }

//     return members.map((member, index) => (
//       <View key={index} style={styles.memberContainer}>
//         <View style={styles.avatarPlaceholder}></View>
//         <Text style={styles.memberName}>{member.name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisor</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} onPress={()=>navigateTo('show_user')}>ADD Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>

           

//           {count > 1 && (
//             <Picker
//               selectedValue={selectedValue}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             >
//               {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                 <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//               ))}

//             </Picker>

//           )}
//         </View>
//         <View style={styles.membersRow}>
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon if needed */}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Worker</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} >Add Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(members)}
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon if needed */}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity
//         style={styles.doneButton}
//         onPress={() => navigateTo('NextScreen', { members, count, selectedValue })}
//       >
//         <Text style={styles.doneButtonText}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center', // Aligns the picker to the center vertically
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   picker: {
//     height: 50,
//     width: 150, // Adjust the width as needed
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 14,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

// export default ShiftMembersScreen_M;



// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Ensure this package is installed
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';


// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [members, setMembers] = useState([]); // Ensure it's an array initially
//   const [count, setCount] = useState('');
//   const [selectedValue, setSelectedValue] = useState('');


//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
//           console.log('API Response:', res.data); // Debugging line
//           if (res.data.success) {
//             setMembers(Array.isArray(res.data.members) ? res.data.members : []); // Ensure it's an array
//             setCount(res.data.count);
//           } else {
//             console.log(res.data.message);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching shift members:', err);
//       }
//     };

//     fetchMembers();
//   }, [user]);


//   const renderMembers = (members) => {
//     if (!Array.isArray(members)) {
//       return <Text>No members available</Text>;
//     }

//     return members.map((member, index) => (
//       <View key={index} style={styles.memberContainer}>
//         <View style={styles.avatarPlaceholder}></View>
//         <Text style={styles.memberName}>{member.name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisor</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} onPress={()=>navigateTo('show_user')}>ADD Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>

           

//           {count > 1 && (
//             <Picker
//               selectedValue={selectedValue}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             >
//               {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                 <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//               ))}

//             </Picker>

//           )}
//         </View>
//         <View style={styles.membersRow}>
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon if needed */}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Worker</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount} >Add Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(members)}
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon if needed */}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity
//         style={styles.doneButton}
//         onPress={() => navigateTo('NextScreen', { members, count, selectedValue })}
//       >
//         <Text style={styles.doneButtonText}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center', // Aligns the picker to the center vertically
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   picker: {
//     height: 50,
//     width: 150, // Adjust the width as needed
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 14,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

// export default ShiftMembersScreen_M;



// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const ShiftMembersScreen_M = ({ navigateTo }) => {
//   const { user } = useContext(UserContext);
//   const [members, setMembers] = useState([]);
//   const [count, setCount] = useState('');
//   const [selectedValue, setSelectedValue] = useState('1');

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
//           if (res.data.success) {
//             setMembers(res.data.members);
//             setCount(res.data.count);
//           } else {
//             console.log(res.data.message);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching shift members:', err);
//       }
//     };

//     fetchMembers();
//   }, [user]);

//   const renderMembers = (members) => {
//     return members.map((member) => (
//         <>
//         <View>
//         {count > 1 && (
//             <Picker
//               selectedValue={selectedValue}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             >
//               {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
//                 <Picker.Item key={value} label={value.toString()} value={value.toString()} />
//               ))}
//             </Picker>
//           )}
//           </View>
//       <View key={member.id} style={styles.memberContainer}>
//         <Text>{member.name}</Text>
       
//         <View style={styles.avatarPlaceholder} />
//       </View>
//       </>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Shift Members</Text>
//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Supervisor</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount}>Members 1</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(members.slice(0, 1))}
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon */}
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Worker</Text>
//           <View style={styles.sectionHeaderRight}>
//             <Text style={styles.memberCount}>Members {count}</Text>
//             <Text style={styles.seeAll}>see all</Text>
//           </View>
//         </View>
//         <View style={styles.membersRow}>
//           {renderMembers(members)}
//           <TouchableOpacity style={styles.addButton}>
//             {/* Add an image source for your icon */}
//           </TouchableOpacity>
//         </View>
//       </View>
//       <TouchableOpacity style={styles.doneButton} onPress={() => navigateTo('NextScreen')}>
//         <Text style={styles.doneButtonText}>Done</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   sectionContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   sectionHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberCount: {
//     fontSize: 14,
//     marginRight: 15,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: '#888',
//   },
//   membersRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   memberContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   avatarPlaceholder: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   memberName: {
//     fontSize: 16,
//   },
//   picker: {
//     height: 50,
//     width: 150,
//     marginTop: 10,
//   },
//   addButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: 40,
//     backgroundColor: '#4f5b77',
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 10,
//   },
//   doneButtonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

// export default ShiftMembersScreen_M;
