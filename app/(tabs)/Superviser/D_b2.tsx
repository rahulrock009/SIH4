import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { UserContext } from '../Login/UserContext';
import axios from 'axios';

const S_Dashboard = ({ navigateTo }) => {
  const { user } = useContext(UserContext);

  const [supervisor, setSupervisor] = useState(null);
  const [workers, setWorkers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState('');
  const [shiftNumber, setShiftNumber] = useState(0);

  useEffect(() => {
    const fetchShiftDetails = async () => {
      try {
        if (user) {
          const res = await axios.get('http://localhost:3000/getworkers', { params: { userId: user._id } });
          console.log('API Response:', res.data); // Debugging line

          if (res.status === 200) {
            // Assuming res.data is an array of workers/supervisors with the required fields
            const supervisorData = res.data.find(emp => emp.role === 'supervisor'); // Adjust the condition based on your role definition
            const workersData = res.data.filter(emp => emp.role === 'worker');

            setSupervisor(supervisorData);
            setWorkers(workersData);
            setTasks(res.data.map(emp => emp.task)); // Adjust if tasks are fetched differently
            setDate(supervisorData.date);
            setShiftNumber(supervisorData.shiftNumber);
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

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text>Supervisor ID: {user._id}</Text>

      {/* Display Supervisor Details */}
      {supervisor && (
        <View>
          <Text>Supervisor Name: {supervisor.emp_name}</Text>
          <Text>Supervisor ID: {supervisor.emp_id}</Text>
          <Text>Work Type: {supervisor.work_type}</Text>
          <Text>Date: {date}</Text>
          <Text>Shift Number: {shiftNumber}</Text>
        </View>
      )}

      {/* Workers List */}
      <Text style={styles.sectionTitle}>Workers</Text>
      {workers.map(worker => (
        <View key={worker.emp_id} style={styles.employee}>
          <View style={styles.employeeInfo}>
            <Image
              source={{ uri: 'https://th.bing.com/th/id/OIP.AxJFy3lGG645DOcVKBVeyAHaJh?w=167&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
              style={styles.iconRight}
            />
            <View style={styles.employeeTextContainer}>
              <Text style={{ color: 'white' }}>{worker.emp_name}</Text>
              <Text>{worker.work_type}</Text>
              <Text>Task: {worker.task}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.viewButton} onPress={() => navigateTo('s_viewshift')}>
            <Text style={styles.viewText}>View detail</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Rest of your existing UI components */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#586279',
    marginTop: 23,
  },
  headerImage1: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 2,
    marginRight: 3,
  },
  headerImage2: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 2,
    marginRight: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 20,
  },
  employeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconRight: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  employeeTextContainer: {
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  employee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#586279',
    borderRadius: 10,
    marginVertical: 3.5,
    color: '#FFFFFF',
  },
  viewButton: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 5,
  },
  viewText: {
    color: '#2D2D2D',
  },
  viewAll: {
    color: '#007BFF',
    textAlign: 'right',
    marginVertical: 10,
  },
  message: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#586279',
    borderRadius: 10,
    marginVertical: 3.5,
    color: '#FFFFFF',
  },
  replyButton: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 5,
    width: 75,
    marginLeft: 40,
  },
  replyText: {
    color: '#2D2D2D',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 12,
  },
});

export default S_Dashboard;


// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
// import { useContext,useEffect } from 'react';
// import { UserContext } from '../Login/UserContext';

// const S_Dashboard = ({navigateTo}) => {
//   const { user } = useContext(UserContext);
//   const [messages, setMessages] = useState([
//     { id: 1, name: 'Employee name 1', time: '26-08-2027 7:37 PM' },
//     { id: 2, name: 'Employee name 2', time: '26-08-2027 7:37 PM' },
//   ]);

//   const [employees, setEmployees] = useState([
//     { id: 1, name: 'Employee name 1', occupation: 'Occupation 1' },
//     { id: 2, name: 'Employee name 2', occupation: 'Occupation 1' },
//     { id: 3, name: 'Employee name 3', occupation: 'Occupation 3' },
//   ]);

//   useEffect(() => {
//     const fetchShiftDetails = async () => {
//       try {
//         if (user) {
//           const res = await axios.get('http://localhost:3000/getworkers', { params: { userId: user._id } });
//           console.log('API Response:', res.data); // Debugging line

//           if (res.data.success) {
//             setdate(res.data);
//             setshiftnumber(res.data);
//             setsupervisor(res.data);//name ,id ,worktype,
//             setworker(res.data);
//             settask(res.data);//
//         // Set the last shift number
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

//   // Search state
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <ScrollView style={styles.container}>
//       <Text>y  {user._id}</Text>

//     //in this i Want to get the supervisor and workers data using get method

//       {/* Header with Images */}
//       <View style={styles.headerContainer}>
//         <Image
//           source={{ uri: 'https://cdn0.iconfinder.com/data/icons/fashion-clothes-vol-2/48/49-512.png' }}
//           style={styles.headerImage1}
//         />
//         <Text style={styles.header}>Supervisor Dashboard</Text>
//         <Image
//           source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png' }}
//           style={styles.headerImage2}
//         />
//       </View>
      
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Image
//           source={{ uri: 'https://th.bing.com/th?id=OIP._RTO9yp1xH5aQA0vS7fpHAHaHW&w=250&h=249&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2' }}
//           style={styles.iconLeft}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search..."
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//         />
//         <Image
//           source={{ uri: 'https://th.bing.com/th/id/OIP.OfNB9_s1DDygBHWFXrMggAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
//           style={styles.iconRight}
//         />
//       </View>
      
//       {/* Company Updates */}
//       <Text style={styles.sectionTitle}>Company’s Update</Text>
//       <View style={styles.updateSection}>
//         <View style={styles.updateBlock}>
//           <Text style={styles.updateTitle}>Company update title will be here</Text>
//         </View>
//         <View style={styles.updateBlock}>
//           <Text style={styles.updateTitle}>Company update title will be here</Text>
//         </View>
//       </View>

//       {/* Employee List */}
//       <Text style={styles.sectionTitle}>Employee List</Text>
//       {employees.map(employee => (
//         <View key={employee.id} style={styles.employee}>
//           <View style={styles.employeeInfo}>
//             <Image
//               source={{ uri: 'https://th.bing.com/th/id/OIP.AxJFy3lGG645DOcVKBVeyAHaJh?w=167&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
//               style={styles.iconRight}
//             />
//             <View style={styles.employeeTextContainer}>
//               <Text style={{ color: 'white' }}>{employee.name}</Text>
//               <Text>{employee.occupation}</Text>
//             </View>
//           </View>
//           <TouchableOpacity style={styles.viewButton} onPress={()=>navigateTo('s_viewshift')}>
//             <Text style={styles.viewText}>View detail</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
      
//       <TouchableOpacity onPress={()=>navigateTo('taskdetails')}>
//         <Text style={styles.viewAll}>View all {'>>'}</Text>
//       </TouchableOpacity>

//       {/* Message Section */}
//       <Text style={styles.sectionTitle}>Message</Text>
//       {messages.map(message => (
//         <View key={message.id} style={styles.message}>
//           <View style={styles.messageInfo}>
//             <Image
//               source={{ uri: 'https://th.bing.com/th/id/OIP.AxJFy3lGG645DOcVKBVeyAHaJh?w=167&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
//               style={styles.iconRight}
//             />
//             <View style={styles.messageTextContainer}>
//               <Text style={{ color: 'white' }}>{message.name}</Text>
//               <Text>{message.time}</Text>
//             </View>
//             <TouchableOpacity style={styles.replyButton}>
//               <Text style={styles.replyText}>Reply</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ))}
      
//       <TouchableOpacity>
//         <Text style={styles.viewAll}>View all {'>>'}</Text>
//       </TouchableOpacity>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image
//             source={{ uri: 'https://example.com/home-icon.png' }}
//             style={styles.icon}
//           />
//           <Text style={styles.buttonText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={()=>navigateTo('addshift')}>
//           <Image
//             source={{ uri: 'https://example.com/add-shift-icon.png' }}
//             style={styles.icon}
//           />
//           <Text style={styles.buttonText}>Add Shift</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image
//             source={{ uri: 'https://example.com/alert-icon.png' }}
//             style={styles.icon}
//           />
//           <Text onPress={()=>navigateTo('danger')} style={styles.buttonText}>Alert</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={()=>navigateTo('compliences')}>
//           <Image
//             source={{ uri: 'https://example.com/report-icon.png' }}
//             style={styles.icon}
//           />
//           <Text style={styles.buttonText}>Report</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image
//             source={{ uri: 'https://example.com/profile-icon.png' }}
//             style={styles.icon}
//           />
//           <Text style={styles.buttonText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#586279',
//     marginTop: 23,
//   },
//   headerImage1: {
//     width: 30,
//     height: 40,
//     resizeMode: 'contain',
//     marginLeft: 2,
//     marginRight: 3,
//   },
//   headerImage2: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//     marginLeft: 2,
//     marginRight: 3,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 25,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginVertical: 20,
//   },
//   employeeInfo: {
//     flexDirection: 'row', // Arrange image and text in a row
//     alignItems: 'center', // Align items vertically centered
//   },
//   messageInfo: {
//     flexDirection: 'row', // Arrange image and text in a row
//     alignItems: 'center', // Align items vertically centered
//   },
//   iconLeft: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000',
//   },
//   iconRight: {
//     width: 20,
//     height: 20,
//     marginLeft: 10,
//   },
//   employeeTextContainer:
//   {
//     marginLeft:15
 
//   },
//   messageTextContainer:
//   {
//     marginLeft:15
 
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
 
//     sectionTitle: {
//       // Your existing sectionTitle styles
//     },
//     updateSection: {
//       flexDirection: 'row', // Arrange blocks horizontally
//       justifyContent: 'space-between', // Space between the blocks
//       padding: 10, // Optional padding around the section
     
//     },
//     updateBlock: {
//       flex: 1, // Allow each block to take up equal space
//       marginRight: 10, // Space between the blocks (adjust as needed)
//        backgroundColor:'#586279',
//        padding:15,
//        borderRadius: 10,
//        color:'#2D2D2D'

//     },
//     updateTitle: {
//       // Your existing updateTitle styles
//       color:'#2D2D2D',
//     },
  
  
//   employee: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//     backgroundColor: '#586279',
//     borderRadius: 10,
//     marginVertical: 3.5,
//     color:'#FFFFFF',
//   },
//   viewButton: {
//     backgroundColor: '#FFFFFF',
//     padding: 5,
//     borderRadius: 5,
//   },
//   viewText: {
//     color: '#2D2D2D',
//   },
//   viewAll: {
//     color: '#007BFF',
//     textAlign: 'right',
//     marginVertical: 10,
//   },
//   message: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//     backgroundColor: '#586279',
//     borderRadius: 10,
//     marginVertical: 3.5,
//     color:'#FFFFFF',
//   },
//   replyButton: {
//     backgroundColor: '#FFFFFF',
//     padding: 5,
//     borderRadius: 5,
//     width:75,
//     marginLeft:40
//   },
//   replyText: {
//     color: '#2D2D2D',
//     textAlign:'center'
//   },
//   footer: {
//     flexDirection: 'row', // Arrange buttons horizontally
//     justifyContent: 'space-around', // Distribute space between buttons
//     padding: 10,
//   },
//   footerButton: {
//     alignItems: 'center', // Center content vertically
//   },
//   icon: {
//     width: 30, // Set icon size
//     height: 30,
//     marginBottom: 5, // Space between icon and text
//   },
//   buttonText: {
//     fontSize: 12, // Adjust text size as needed
//   },
// });
// export default S_Dashboard;