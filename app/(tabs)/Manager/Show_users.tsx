
// do not want to take

import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import { UserContext } from '../Login/UserContext';

const UserCard = ({ name, id, role, onAdd }) => (
  <View style={styles.card}>
    <View style={styles.avatar}></View>
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.id}>ID: {id}</Text>
    </View>
    <Button title="Add" onPress={() => onAdd({ emp_name: name, emp_id: id, emp_role: role })} />
  </View>
);

export default function Show_workers({ navigateTo }) {

  const { user } = useContext(UserContext);
  const [supervisors, setSupervisors] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (user) {
          const res = await axios.get('http://localhost:3000/getuser', { params: { userId: user._id } });
          console.log('API Response:', res.data);
          if (Array.isArray(res.data)) {
            const supervisorData = res.data.filter(emp => emp.role === 'supervisor');
            const workerData = res.data.filter(emp => emp.role === 'worker');
            setSupervisors(supervisorData);
            setWorkers(workerData);
          } else {
            console.log('Unexpected data format:', res.data);
          }
        }
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, [user]);

  const handleAddEmployee = (employee) => {
    setSelectedEmployees(prev => [...prev, employee]);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3000/shift_user', { userId: user._id, employees: selectedEmployees });
      console.log('Submit Response:', res.data);
      navigateTo('ShiftMembersScreen_M');
    } catch (err) {
      console.error('Error submitting selected employees:', err);
    }
  };

  const { width } = Dimensions.get('window');
  const isLargeScreen = width > 600;

  return (
    <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
      <Text style={{fontSize:20 ,alignContent:'center',alignItems:'center'}}>Add Shift Members</Text>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.title} onPress={() => navigateTo('ShiftMembersScreen_M')}>Supervisors</Text>
          <Button title="See all" onPress={() => {}} />
        </View>
        <FlatList
          data={supervisors}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <UserCard name={item.emp_name} id={item.emp_id} role={item.role} onAdd={handleAddEmployee} />
          )}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.title}>Workers</Text>
          <Button title="See all" onPress={() => {}} />
        </View>
        <FlatList
          data={workers}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <UserCard name={item.emp_name} id={item.emp_id} role={item.role} onAdd={handleAddEmployee} />
          )}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  largeContainer: {
    paddingHorizontal: 40,
  },
  section: {
    marginBottom: 20,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
});


// import React, { useContext, useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const UserCard = ({ name, id, onAdd }) => (
//   <View style={styles.card}>
//     <View style={styles.avatar}></View>
//     <View>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.id}>ID: {id}</Text>
//     </View>
//     <Button title="Add" onPress={() => onAdd({ emp_name: name, emp_id: id })} />
//   </View>
// );

// export default function Show_workers({ navigateTo }) {
//   const { user } = useContext(UserContext);
//   const [supervisors, setSupervisors] = useState([]);
//   const [workers, setWorkers] = useState([]);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/getuser', { params: { userId: user._id } });
//           console.log('API Response:', res.data);
//           if (Array.isArray(res.data)) {
//             const supervisorData = res.data.filter(emp => emp.role === 'supervisor');
//             const workerData = res.data.filter(emp => emp.role === 'worker');
//             setSupervisors(supervisorData);
//             setWorkers(workerData);
//           } else {
//             console.log('Unexpected data format:', res.data);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };

//     fetchUsers();
//   }, [user]);

//   const handleAddEmployee = (employee) => {
//     setSelectedEmployees(prev => [...prev, employee]);
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await axios.post('http://localhost:3000/shift_user', { userId: user._id, employees: selectedEmployees });
//       console.log('Submit Response:', res.data);
//     } catch (err) {
//       console.error('Error submitting selected employees:', err);
//     }
//   };

//   const { width } = Dimensions.get('window');
//   const isLargeScreen = width > 600;

//   return (
//     <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
//       <View style={styles.section}>
//         <View style={styles.header}>
//           <Text style={styles.title} onPress={() => navigateTo('ShiftMembersScreen_M')}>Supervisors</Text>
//           <Button title="See all" onPress={() => {}} />
//         </View>
//         <FlatList
//           data={supervisors}
//           keyExtractor={item => item._id}
//           renderItem={({ item }) => (
//             <UserCard name={item.emp_name} id={item.emp_id} onAdd={handleAddEmployee} />
//           )}
//         />
//       </View>
//       <View style={styles.section}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Workers</Text>
//           <Button title="See all" onPress={() => {}} />
//         </View>
//         <FlatList
//           data={workers}
//           keyExtractor={item => item._id}
//           renderItem={({ item }) => (
//             <UserCard name={item.emp_name} id={item.emp_id} onAdd={handleAddEmployee} />
//           )}
//         />
//       </View>
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   largeContainer: {
//     paddingHorizontal: 40,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#ccc',
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   id: {
//     fontSize: 14,
//     color: '#666',
//   },
// });



// import React, { useContext, useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const UserCard = ({ name, id }) => (
//     <View style={styles.card}>
//       <View style={styles.avatar}></View>
//       <View>
//         <Text style={styles.name}>{name}</Text>
//         <Text style={styles.id}>ID: {id}</Text>
//       </View>
//       <Button title="Add" onPress={() => {}} />
//     </View>
//   );
  
// export default function Show_workers({navigateTo}) {
//   const { user } = useContext(UserContext);
//   const [supervisors, setSupervisors] = useState([]);
//   const [workers, setWorkers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/getuser', { params: { userId: user._id } });
//           console.log('API Response:', res.data); // Debugging line
//           if (Array.isArray(res.data)) {
//             const supervisorData = res.data.filter(emp => emp.role === 'supervisor');
//             const workerData = res.data.filter(emp => emp.role === 'worker');
//             console.log('Supervisors:', supervisorData); // Debugging line
//             console.log('Workers:', workerData); // Debugging line
//             setSupervisors(supervisorData);
//             setWorkers(workerData);
//           } else {
//             console.log('Unexpected data format:', res.data);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };
  
//     fetchUsers();
//   }, [user]);
  
//   try {
    
//        axios.post('http://localhost:3000/addemployess', { userId: user._id ,emp_name ,emp_id});
//       console.log('API Response:', res.data); // Debugging line
     
    
//   } catch (err) {
//     console.error('Error fetching users:', err);
//   }


//   const { width } = Dimensions.get('window');
//   const isLargeScreen = width > 600;

//  return (
//   <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
//     <View style={styles.section}>
//       <View style={styles.header}>
//         <Text style={styles.title} onPress={()=>navigateTo('ShiftMembersScreen_M')}>Supervisors</Text>
//         <Button title="See all" onPress={() => {}} />
//       </View>
//       <FlatList
//         data={supervisors}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => <UserCard name={item.emp_name} id={item.emp_id} />}
//       />
//     </View>
//     <View style={styles.section}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Workers</Text>
//         <Button title="See all" onPress={() => {}} />
//       </View>
//       <FlatList
//         data={workers}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => <UserCard name={item.emp_name} id={item.emp_id} />}
//       />
//     </View>
//     <Button onPress={handlesubmit}>added</Button>
//   </View>
// );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   largeContainer: {
//     paddingHorizontal: 40,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#ccc',
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   id: {
//     fontSize: 14,
//     color: '#666',
//   },
// });



// import React, { useContext, useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const UserCard = ({ name, id }) => (
//   <View style={styles.card}>
//     <View style={styles.avatar}></View>
//     <View>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.id}>ID: {id}</Text>
//     </View>
//     <Button title="Add" onPress={() => {}} />
//   </View>
// );

// export default function Show_workers() {
//   const [supervisors, setSupervisors] = useState([]);
//   const [workers, setWorkers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/getuser');
//         console.log('API Response:', res.data); // Debugging line
//         if (Array.isArray(res.data)) {
//           const supervisorData = res.data.filter(emp => emp.role === 'supervisor');
//           const workerData = res.data.filter(emp => emp.role === 'worker');
//           console.log('Supervisors:', supervisorData); // Debugging line
//           console.log('Workers:', workerData); // Debugging line
//           setSupervisors(supervisorData);
//           setWorkers(workerData);
//         } else {
//           console.log('Unexpected data format:', res.data);
//         }
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const { width } = Dimensions.get('window');
//   const isLargeScreen = width > 600;

//   return (
//     <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
//       <View style={styles.section}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Supervisors</Text>
//           <Button title="See all" onPress={() => {}} />
//         </View>
//         <FlatList
//           data={supervisors}
//           keyExtractor={item => item._id}
//           renderItem={({ item }) => <UserCard name={item.emp_name} id={item.emp_id} />}
//         />
//       </View>
//       <View style={styles.section}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Workers</Text>
//           <Button title="See all" onPress={() => {}} />
//         </View>
//         <FlatList
//           data={workers}
//           keyExtractor={item => item._id}
//           renderItem={({ item }) => <UserCard name={item.emp_name} id={item.emp_id} />}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   largeContainer: {
//     paddingHorizontal: 40,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#ccc',
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   id: {
//     fontSize: 14,
//     color: '#666',
//   },
// });


// import React ,{useContext} from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import { UserContext } from '../Login/UserContext';

// const DATA_SUPERVISORS = [
//   { id: '1', name: 'Mukesh' },
//   { id: '2', name: 'Axar' },
//   { id: '3', name: 'Singh' },
// ];

// const DATA_WORKERS = [
//   { id: '1', name: 'William' },
//   { id: '2', name: 'Shankar' },
//   { id: '3', name: 'Jakar' },
//   { id: '4', name: 'Kyle' },
//   { id: '5', name: 'Ali' },
//   { id: '6', name: 'Riyan' },
// ];

// const UserCard = ({ name }) => (
//   <View style={styles.card}>
//     <View style={styles.avatar}></View>
//     <View>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.id}>ID: 62527</Text>
//     </View>
//     <Button title="Add" onPress={() => {}} />
//   </View>
// );

// export default function Show_workers() {
//     const { user } = useContext(UserContext);
//     useEffect(() => {
        
//           try {
//         if(user){
//               const res = await axios.get('http://localhost:3000/getuser', { params: { userId: user._id } });
//                // Debugging line
//               if (res.data.success) {
//                 setusers(res.data);
//               } else {
//                 console.log(res.data.message);
//               }
//         }
//           } catch (err) {
//             console.error('Error fetching shift members:', err);
//           }
//         };
    
     
//       }, [user]);
    
//   const { width } = Dimensions.get('window');
//   const isLargeScreen = width > 600;

//   return (
//     <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
//       <View style={styles.section}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Supervisors</Text>
//           <Button title="See all" onPress={() => {}} />
//         </View>
//         <FlatList
//           data={DATA_SUPERVISORS}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => <UserCard name={item.name} />}
//         />
//       </View>
//       <View style={styles.section}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Workers</Text>
//           <Button title="See all" onPress={() => {}} />
//         </View>
//         <FlatList
//           data={DATA_WORKERS}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => <UserCard name={item.name} />}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   largeContainer: {
//     paddingHorizontal: 40,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#ccc',
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   id: {
//     fontSize: 14,
//     color: '#666',
//   },
// });
