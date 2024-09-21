import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  // Define state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Worker');
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Handle login button press
  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Clear previous errors
    setError('');
    setResponseMessage('');

    // Mock authentication logic (replace with real API call)
    if (email === 'test@example.com' && password === 'password123') {
      setResponseMessage(`Logged in as ${selectedRole}`);
      // Navigate to appropriate screen based on role
      navigation.navigate(selectedRole + 'Dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  // Navigate to different screens
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your logo image
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to access your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
        />

        <Text style={styles.roleLabel}>Select Role:</Text>
        <RadioButton.Group
          onValueChange={value => setSelectedRole(value)}
          value={selectedRole}
        >
          <View style={styles.radioContainer}>
            <View style={styles.radioButton}>
              <RadioButton value="Worker" color="#007BFF" />
              <Text style={styles.radioLabel}>Worker</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Supervisor" color="#007BFF" />
              <Text style={styles.radioLabel}>Supervisor</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Manager" color="#007BFF" />
              <Text style={styles.radioLabel}>Manager</Text>
            </View>
          </View>
        </RadioButton.Group>

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {responseMessage ? (
          <Text style={styles.response}>{responseMessage}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('SignUp')}>
          <Text style={styles.link}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  roleLabel: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 10,
  },
  error: {
    color: '#ff3333',
    fontSize: 14,
    marginBottom: 10,
  },
  response: {
    color: '#28a745',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default LoginScreen;


// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, CheckBox } from 'react-native';
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
//       setError('the email or password is invalid. Please try again.');
//     }
//   };

//   const handlePress = () => {
//     handleSubmit();
//   };

//   return (
//     <View style={styles.container}>
//           <Image
//              source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with your image path
//             style={styles.logo}
//           />
//           <Text style={styles.title}>Welcome back</Text>
//           <View style={{marginTop:20}}></View>
//           <Text style={styles.subtitle}>sign in to access your account</Text>
//           <View style={{marginTop:20}}></View>
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
//       <View style={styles.checkboxContainer}>
//         <CheckBox
//           value={rememberMe}
//           onValueChange={setRememberMe}
//           style={styles.checkbox}
//         />
//         <Text style={styles.label}>Remember me</Text>
//       </View>
//       <View style={styles.roleContainer}>
//         <View style={styles.roleOption}>
//           <CheckBox
//             value={selectedRole === 'Worker'}
//             onValueChange={() => setSelectedRole('Worker')}
//           />
//           <Text style={{ marginLeft: 10 }}>Worker</Text>
//         </View>
//         <View style={styles.roleOption}>
//           <CheckBox
//             value={selectedRole === 'Supervisor'}
//             onValueChange={() => setSelectedRole('Supervisor')}
//           />
//           <Text style={{ marginLeft: 10 }}>Supervisor</Text>
//         </View>
//         <View style={styles.roleOption}>
//           <CheckBox
//             value={selectedRole === 'Manager'}
//             onValueChange={() => setSelectedRole('Manager')}
//           />
//           <Text style={{ marginLeft: 10 }}>Manager</Text>
//         </View>
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
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   checkbox: {
//     alignSelf: 'center',
//   },
//   label: {
//     margin: 8,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   link: {
//     color: '#007BFF',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   response: {
//     color: 'green',
//     marginBottom: 10,
//   },
//   roleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   roleOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
   
//       title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 5,
//       },
//       subtitle: {
//         fontSize: 16,
//         color: 'gray',
//         marginBottom: 20,
//       },
// });


// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   CheckBox,
// } from 'react-native';

// export default function LoginScreen({ navigateTo }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [route ,setroute] = useState('');
//   const [selectedRole, setSelectedRole] = useState('Worker');
//   const [isSelected, setSelection] = useState(false);


//   const handleLogin = () => {
//     // Handle login logic here
//   };

//   const handleForgotPassword = () => {
//     // Handle forgot password logic here
//   };

//   const handleRegister = () => {
//     // Handle registration logic here
//   };


//   const navigation = useNavigation(); // Initialize navigation



//   const handlePress = () => {
//     handleLogin();
//     switch (selectedRole) {
//       case 'Worker':
//         navigateTo('Worker');
//         break;
//       case 'Supervisor':
//         navigateTo('Supervisor');
//         break;
//       case 'Manager':
//         navigateTo('Manager');
//         break;
//       default:
//         // Handle default case or show an error message
//         break;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//          source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with your image path
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Welcome back</Text>
//       <View style={{marginTop:20}}></View>
//       <Text style={styles.subtitle}>sign in to access your account</Text>
//       <View style={{marginTop:20}}></View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <View style={{marginTop:20}}></View>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={true}
//         />
//       </View>

//       <View style={{ display: 'flex', flexDirection: 'row' }}>
//       <View style={styles.roleOption}>
//         <CheckBox
//           value={selectedRole === 'Worker'}
//           onValueChange={() => setSelectedRole('Worker')}
//         />
//         <View style={{ marginTop: 5 }}></View>
//         <Text style={{ marginLeft: 10 }}>Worker</Text>
//       </View>
//       <View style={styles.roleOption}>
//         <CheckBox
//           value={selectedRole === 'Supervisor'}
//           onValueChange={() => setSelectedRole('Supervisor')}
//         />
//         <Text style={{ marginLeft: 10 }}>Supervisor</Text>
//       </View>
//       <View style={styles.roleOption}>
//         <CheckBox
//           value={selectedRole === 'Manager'}
//           onValueChange={() => setSelectedRole('Manager')}
//         />
//         <Text style={{ marginLeft: 10 }}>Manager</Text>
//       </View>
    
//     </View>
// {/* <View style={{display:'flex',flexDirection:'row'}}>
//       <View style={styles.roleOption}>
//           <CheckBox
//             value={selectedRole === 'Worker'}
            
//             onValueChange={() => setSelectedRole('Worker')}
//           />
//            <View style={{marginTop: 5,}}></View>

//           <Text style={{marginLeft: 10,}}>Worker</Text>
//         </View>
//         <View  style={styles.roleOption}>
//           <CheckBox
//             value={selectedRole === 'Supervisor'}
//             onValueChange={() => setSelectedRole('Supervisor')}
//           />
//           <Text style={{marginLeft: 10,}}>Supervisor</Text>
//         </View>
//         <View style={styles.roleOption}>
//           <CheckBox
//             value={selectedRole === 'Manager'}
//             onValueChange={() => setSelectedRole('Manager')}
//           />
//           <Text style={{marginLeft: 10,}}>Manager</Text>
//         </View>
//         </View> */}



//       <View style={{marginTop:20}}></View>
//       <View style={styles.optionsContainer}>
//         <View style={styles.rememberMeContainer}>
//           <CheckBox
//             value={rememberMe}
//             onValueChange={setRememberMe}
//             style={styles.checkbox}
//           />
//           <Text style={styles.rememberMeText}>Remember me</Text>
//         </View>
//         <TouchableOpacity onPress={handleForgotPassword}>
//           <Text style={styles.forgotPasswordText}>Forget password ?</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin} onPress={handlePress}>
//         <Text style={styles.loginButtonText}>Next</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.registerContainer} onPress={handleRegister}>
//         <Text style={styles.registerText}>
//           New Member? <Text style={styles.registerLink}  onPress={() => navigateTo('signup')}>Register now</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: '#F5F5F5',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   rememberMeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkbox: {
//     marginRight: 10,
//   },
//   rememberMeText: {
//     fontSize: 14,
//   },
//   forgotPasswordText: {
//     fontSize: 14,
//     color: '#FF6363',
//   },
//   loginButton: {
//     backgroundColor: '#6C63FF',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   registerContainer: {
//     alignItems: 'center',
//   },
//   registerText: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   registerLink: {
//     color: '#FF6363',
//     fontWeight: 'bold',
//   },
//   roleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
    
//   },
//   roleOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft:50
//   },
// });
