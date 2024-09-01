import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Make sure to install this package
import axios from 'axios';
import { UserContext } from '../Login/UserContext';

const ShiftMembersScreen_M = ({ navigateTo }) => {
  const { user } = useContext(UserContext);
  const [members, setMembers] = useState([]);
  const [count, setCount] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        if (user) {
          const res = await axios.get('http://localhost:3000/addshift', { params: { userId: user._id } });
          if (res.data.success) {
            setMembers(res.data.members);
            setCount(res.data.count);
          } else {
            console.log(res.data.message);
          }
        }
      } catch (err) {
        console.error('Error fetching shift members:', err);
      }
    };

    fetchMembers();
  }, [user]);

  const renderMembers = (members) => {
    return members.map((member) => (
      <View key={member.id} style={styles.memberContainer}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.memberName}>{member.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shift Members</Text>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Supervisor</Text>
          {/* Dropdown placed here */}
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
        <View style={styles.membersRow}>
          {renderMembers(members.slice(0, 1))}
          
          <TouchableOpacity style={styles.addButton}>
            {/* Add an image source for your icon */}
          </TouchableOpacity>
          <Text style={styles.memberCount}>Members {count}</Text>
          <Text style={styles.seeAll}>see all</Text>
          
        </View>
      </View>
     
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Worker</Text>
          <View style={styles.sectionHeaderRight}>
            <Text style={styles.memberCount}>Members {count}</Text>
            <Text style={styles.seeAll}>see all</Text>
          </View>
        </View>
        <View style={styles.membersRow}>
          {renderMembers(members)}
          <TouchableOpacity style={styles.addButton}>
            {/* Add an image source for your icon */}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.doneButton} onPress={() => navigateTo('NextScreen')}>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Aligns the picker to the center vertically
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 150, // Adjust the width as needed
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
    fontSize: 14,
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
});

export default ShiftMembersScreen_M;


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
