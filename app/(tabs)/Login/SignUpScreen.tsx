import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import axios from 'axios';

export default function SignUpScreen({ navigateTo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [selectedRole, setSelectedRole] = useState('Worker');
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const { width } = Dimensions.get('window');
  const isLargeScreen = width >= 768;

  const handleSubmit = () => {
    if (!name || !email || !pass) {
      setError('Please fill in all fields.');
      return;
    }

    // axios.post('http://192.168.1.39:3000/', { name, email, pass, selectedRole })
    
    axios.post('http://localhost:3000/', { name, email, pass, selectedRole })
      .then((res) => {
        console.log('Response:', res);
        setName('');
        setEmail('');
        setPass('');
        setSelectedRole('Worker');
        navigateTo('login');
      })
      .catch((err) => {
        console.error('Error:', err.response ? err.response.data : err.message);
        setResponseMessage('Registration failed. Please try again.');
      });
  };

  useEffect(() => {
    setName('');
    setEmail('');
    setPass('');
    setSelectedRole('Worker');
  }, []);

  return (
    <View style={[styles.container, isLargeScreen && styles.largeScreenContainer]}>
      {/* <Image source={{ uri: '' }} style={styles.image} /> */}
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>create account</Text>
      <TextInput
        style={[styles.input, isLargeScreen && styles.inputSmall]}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, isLargeScreen && styles.inputSmall]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, isLargeScreen && styles.inputSmall]}
        placeholder="Password"
        value={pass}
        onChangeText={setPass}
        secureTextEntry
      />
      {/* <View style={styles.checkboxContainer}>
        <Text>Are you a {selectedRole}?</Text>
        <Switch value={isSelected} onValueChange={setSelection} />
      </View> */}

      <View style={styles.roleContainer}>
        {['Worker', 'Supervisor', 'Manager'].map((role) => (
          <View key={role} style={styles.roleOption}>
            <TouchableWithoutFeedback onPress={() => setSelectedRole(role)}>
              <View style={[styles.radioButton, isLargeScreen && styles.radioButtonSmall]}>
                {selectedRole === role && <View style={[styles.radioButtonSelected, isLargeScreen && styles.radioButtonSelectedSmall]} />}
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.roleText}>{role}</Text>
          </View>
        ))}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={[styles.button, isLargeScreen && styles.buttonSmall]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Signin</Text>
      </TouchableOpacity>
      {responseMessage ? <Text style={styles.responseText}>{responseMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
  },
  largeScreenContainer: {
    paddingHorizontal: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%', // Full width for better alignment
    maxWidth: 400,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  inputSmall: {
    padding: 10, // Reduced padding for larger screens
    marginVertical: 8,
    fontSize: 14, // Reduced font size
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center roles horizontally
    width: '90%',
    marginBottom: 30,
    marginTop:20,
    marginLeft:10
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10, // Space between role options
  },
  roleText: {
    marginLeft: 1,
    width:70,
    fontSize:15
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSmall: {
    height: 16, // Smaller radio button for large screens
    width: 16,
    borderRadius: 8,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  radioButtonSelectedSmall: {
    height: 8, // Smaller inner circle for large screens
    width: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonSmall: {
    padding: 12, // Reduced padding for larger screens
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    width:60
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    width:200,
    left:20
  },
  responseText: {
    marginTop: 10,
    color: 'green',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
    width:200,
    left:20
  },
});
