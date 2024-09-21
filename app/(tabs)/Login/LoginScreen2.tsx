// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { UserContext } from './UserContext'; // Ensure UserContext is defined and provides setUser
// import axios from 'axios';

// export default function LoginScreen_M({ navigateTo }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [selectedRole, setSelectedRole] = useState('Worker'); // Default role
//   const [error, setError] = useState('');
//   const [ress, setRess] = useState('');
//   const { setUser } = useContext(UserContext);

// // Make sure to provide the correct backend URL and field names
// const handleSubmit = async () => {
//   // Log the data being sent
//   console.log('Sending data:', { email, password, selectedRole });


  
//   try {
//     const res = await axios.post('http://localhost:3000/validate', { email, password, selectedRole });
//     if (res.data.success) {
//       setUser(res.data.user); // Store the user data in context
//       navigateTo(selectedRole); // Navigate based on the role
//     } else {
//       setRess(res.data.message); // Show error message
//     }
//   } catch (err) {
//     console.error('Login request error:', err);
//     setError('The email or password is invalid. Please try again.');
//   }
// };

  
//   const handlePress = () => {
//     handleSubmit();
//   };  

  
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: '' }} // Replace with your image path
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Welcome back</Text>
//       <Text style={styles.subtitle}>Sign in to access your account</Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       {/* Radio buttons for role selection */}
//       <View style={styles.radioContainer}>
//         {['Worker', 'Supervisor', 'Manager'].map((role) => (
//           <TouchableOpacity
//             key={role}
//             style={styles.radioButtonContainer}
//             onPress={() => setSelectedRole(role)}
//           >
//             <View style={styles.radioButton}>
//               {selectedRole === role && <View style={styles.radioButtonSelected} />}
//             </View>
//             <Text style={styles.radioButtonLabel}>{role}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       {ress ? <Text style={styles.response}>{ress}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
//         <Text style={styles.link}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateTo('signup')}>
//         <Text style={styles.link}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//     padding: 30, // Added padding to the container
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%', // Full width
//     maxWidth: 400, // Maximum width
//     height: 40, // Increased height for better usability
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     fontSize: 16, // Slightly larger font size
//   },
//   button: {
//     width: '100%', // Full width
//     maxWidth: 200, // Maximum width
//     backgroundColor: '#007BFF',
//     paddingVertical: 10, // Increased padding
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16, 
//     // Slightly larger font size
//   },
//   link: {
//     color: '#007BFF',
//     marginTop: 15,
//     fontSize: 16,
    
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//     fontSize: 16, // Slightly larger font size
//   },
//   response: {
//     color: 'green',
//     marginBottom: 10,
//     fontSize: 16, // Slightly larger font size
//   },
//   title: {
//     fontSize: 35, // Larger title size
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 20, // Slightly larger subtitle
//     color: 'gray',
//     marginBottom: 20,
//   },
//   radioContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center', // Center radio buttons horizontally
//     marginBottom: 20,
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 10, // Space between radio buttons
//   },
//   radioButton: {
//     height: 20, // Increased radio button size
//     width: 20, // Increased radio button size
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#007BFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioButtonSelected: {
//     height: 12, // Larger selected inner circle
//     width: 12, // Larger selected inner circle
//     borderRadius: 6,
//     backgroundColor: '#007BFF',
//   },
//   radioButtonLabel: {
//     marginLeft: 10, // Adjusted spacing
//     fontSize: 16, // Slightly larger font size
//   },
// });
// ////////////////////////////////////////////


// // import React, { useState, useContext } from 'react';
// // import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// // import { UserContext } from './UserContext'; // Ensure UserContext is defined and provides setUser
// // import axios from 'axios';

// // export default function LoginScreen({ navigateTo }) {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [rememberMe, setRememberMe] = useState(false);
// //   const [selectedRole, setSelectedRole] = useState('Worker'); // Default role
// //   const [error, setError] = useState('');
// //   const [ress, setRess] = useState('');
// //   const { setUser } = useContext(UserContext);

// // // Make sure to provide the correct backend URL and field names
// // const handleSubmit = async () => {
// //   // Log the data being sent
// //   console.log('Sending data:', { email, password, selectedRole });
  
// //   try {
// //     const res = await axios.post('http://localhost:3000/validate', { email, password, selectedRole });
// //     if (res.data.success) {
// //       setUser(res.data.user); // Store the user data in context
// //       navigateTo(selectedRole); // Navigate based on the role
// //     } else {
// //       setRess(res.data.message); // Show error message
// //     }
// //   } catch (err) {
// //     console.error('Login request error:', err);
// //     setError('The email or password is invalid. Please try again.');
// //   }
// // };

  
// //   const handlePress = () => {
// //     handleSubmit();
// //   };  

  
// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         source={{ uri: '' }} // Replace with your image path
// //         style={styles.logo}
// //       />
// //       <Text style={styles.title}>Welcome back</Text>
// //       <Text style={styles.subtitle}>Sign in to access your account</Text>
      
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />

// //       {/* Radio buttons for role selection */}
// //       <View style={styles.radioContainer}>
// //         {['Worker', 'Supervisor', 'Manager'].map((role) => (
// //           <TouchableOpacity
// //             key={role}
// //             style={styles.radioButtonContainer}
// //             onPress={() => setSelectedRole(role)}
// //           >
// //             <View style={styles.radioButton}>
// //               {selectedRole === role && <View style={styles.radioButtonSelected} />}
// //             </View>
// //             <Text style={styles.radioButtonLabel}>{role}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {error ? <Text style={styles.error}>{error}</Text> : null}
// //       {ress ? <Text style={styles.response}>{ress}</Text> : null}

// //       <TouchableOpacity style={styles.button} onPress={handlePress}>
// //         <Text style={styles.buttonText}>Login</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
// //         <Text style={styles.link}>Forgot Password?</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={() => navigateTo('signup')}>
// //         <Text style={styles.link}>Register</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center', // Center content vertically
// //     alignItems: 'center', // Center content horizontally
// //     padding: 30, // Added padding to the container
// //     backgroundColor: '#fff',
// //   },
// //   logo: {
// //     width: 80,
// //     height: 80,
// //     marginBottom: 20,
// //   },
// //   input: {
// //     width: '100%', // Full width
// //     maxWidth: 400, // Maximum width
// //     height: 40, // Increased height for better usability
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 20,
// //     paddingHorizontal: 10,
// //     fontSize: 16, // Slightly larger font size
// //   },
// //   button: {
// //     width: '100%', // Full width
// //     maxWidth: 200, // Maximum width
// //     backgroundColor: '#007BFF',
// //     paddingVertical: 10, // Increased padding
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     marginTop: 15,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     fontSize: 16, 
// //     // Slightly larger font size
// //   },
// //   link: {
// //     color: '#007BFF',
// //     marginTop: 15,
// //     fontSize: 16,
    
// //   },
// //   error: {
// //     color: 'red',
// //     marginBottom: 10,
// //     fontSize: 16, // Slightly larger font size
// //   },
// //   response: {
// //     color: 'green',
// //     marginBottom: 10,
// //     fontSize: 16, // Slightly larger font size
// //   },
// //   title: {
// //     fontSize: 35, // Larger title size
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   subtitle: {
// //     fontSize: 20, // Slightly larger subtitle
// //     color: 'gray',
// //     marginBottom: 20,
// //   },
// //   radioContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center', // Center radio buttons horizontally
// //     marginBottom: 20,
// //   },
// //   radioButtonContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginHorizontal: 10, // Space between radio buttons
// //   },
// //   radioButton: {
// //     height: 20, // Increased radio button size
// //     width: 20, // Increased radio button size
// //     borderRadius: 10,
// //     borderWidth: 2,
// //     borderColor: '#007BFF',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   radioButtonSelected: {
// //     height: 12, // Larger selected inner circle
// //     width: 12, // Larger selected inner circle
// //     borderRadius: 6,
// //     backgroundColor: '#007BFF',
// //   },
// //   radioButtonLabel: {
// //     marginLeft: 10, // Adjusted spacing
// //     fontSize: 16, // Slightly larger font size
// //   },
// // });


// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { UserContext } from './UserContext'; // Ensure UserContext is defined and provides setUser
// import axios from 'axios';

// export default function LoginScreen({ navigateTo }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [selectedRole, setSelectedRole] = useState('Worker'); // Default role
//   const [error, setError] = useState('');
//   const [ress, setRess] = useState('');
//   const { setUser } = useContext(UserContext);

//   const handleSubmit = async () => {
//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:3000/login', { email, password, selectedRole });
//       if (res.data.success) {
//         setUser(res.data.user); // Store the user data in context
//         navigateTo(selectedRole); // Navigate based on the role
//       } else {
//         setRess(res.data.message);
//       }
//     } catch (err) {
//       console.error('Login request error:', err);
//       setError('The email or password is invalid. Please try again.');
//     }
//   };

//   const handlePress = () => {
//     handleSubmit();
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: '' }} // Replace with your image path
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Welcome back</Text>
//       <Text style={styles.subtitle}>Sign in to access your account</Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       {/* Radio buttons for role selection */}
//       <View style={styles.radioContainer}>
//         {['Worker', 'Supervisor'].map((role) => (
//           <TouchableOpacity
//             key={role}
//             style={styles.radioButtonContainer}
//             onPress={() => setSelectedRole(role)}
//           >
//             <View style={styles.radioButton}>
//               {selectedRole === role && <View style={styles.radioButtonSelected} />}
//             </View>
//             <Text style={styles.radioButtonLabel}>{role}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       {ress ? <Text style={styles.response}>{ress}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
//         <Text style={styles.link}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
//         <Text style={styles.link}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateTo('signup')}>
//         <Text style={styles.link}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//     padding: 30, // Added padding to the container
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%', // Full width
//     maxWidth: 400, // Maximum width
//     height: 40, // Increased height for better usability
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     fontSize: 16, // Slightly larger font size
//   },
//   button: {
//     width: '100%', // Full width
//     maxWidth: 200, // Maximum width
//     backgroundColor: '#007BFF',
//     paddingVertical: 10, // Increased padding
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16, 
//     // Slightly larger font size
//   },
//   link: {
//     color: '#007BFF',
//     marginTop: 15,
//     fontSize: 16,
    
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//     fontSize: 16, // Slightly larger font size
//   },
//   response: {
//     color: 'green',
//     marginBottom: 10,
//     fontSize: 16, // Slightly larger font size
//   },
//   title: {
//     fontSize: 35, // Larger title size
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 20, // Slightly larger subtitle
//     color: 'gray',
//     marginBottom: 20,
//   },
//   radioContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center', // Center radio buttons horizontally
//     marginBottom: 20,
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 10, // Space between radio buttons
//   },
//   radioButton: {
//     height: 20, // Increased radio button size
//     width: 20, // Increased radio button size
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#007BFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioButtonSelected: {
//     height: 12, // Larger selected inner circle
//     width: 12, // Larger selected inner circle
//     borderRadius: 6,
//     backgroundColor: '#007BFF',
//   },
//   radioButtonLabel: {
//     marginLeft: 10, // Adjusted spacing
//     fontSize: 16, // Slightly larger font size
//   },
// });
