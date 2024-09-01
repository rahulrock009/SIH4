import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function VerificationScreen({navigateTo}) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);

  const handleCodeChange = (value, index) => {
    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleResend = () => {
    // Reset the timer and resend code logic
    setResendTimer(30);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Almost there</Text>
      <View style={{marginTop:10}}></View>
      <Text style={styles.subtitle}>
        Please enter the 6-digit code sent to your email{' '}
        <View style={{marginTop:10}}></View>
        <Text style={styles.emailText}>contact.uiuxexperts@gmail.com</Text> for
        verification.
      </Text>
      <View style={{marginTop:10}}></View>
      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handleCodeChange(value, index)}
            value={digit}
          />
        ))}
      </View>
      <View style={{marginTop:10}}></View>
      <TouchableOpacity style={styles.verifyButton} onPress={()=>navigateTo('login')}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <View style={{marginTop:10}}></View>

      <View style={styles.resendContainer}>
        <Text>Didn't receive any code? </Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Resend Again</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.timerText}>Request new code in 00:{resendTimer}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  emailText: {
    color: '#FF6363',
    fontWeight: 'bold',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  resendText: {
    color: '#6C63FF',
    textDecorationLine: 'underline',
  },
  timerText: {
    color: 'gray',
  },
});
