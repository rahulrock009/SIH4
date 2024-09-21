import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
import axios from 'axios';
import { UserContext } from '../Login/UserContext';

const { width } = Dimensions.get('window');

const EmployeeForm_M = ({ navigateTo }) => {
    const { user } = useContext(UserContext);

    const [emp_id, setEmpId] = useState('');
    const [emp_name, setEmpName] = useState('');
    const [emp_age, setEmpAge] = useState('');
    const [role, setRole] = useState('');
    const [shifter_status, setShifterStatus] = useState('');
    const [work_type, setWorkType] = useState('');
    const [worker_email, setWorker_email] = useState('');
    const [worker_password, setWorker_password] = useState('');

    const handleAdd = () => {
        if (user) {
            axios.post('http://localhost:3000/adduser', {
                userId: user._id,
                emp_id,
                emp_name,
                emp_age,
                role,
                shifter_status,
                work_type,
                worker_email,
                worker_password,
            })
            .then((res) => {
                console.log('Employee added:', res.data);
                navigateTo('Manager');
            })
            .catch((err) => {
                console.log('Error adding employee:', err);
            });

            // Optionally clear input fields here
            setEmpId('');
            setEmpName('');
            setEmpAge('');
            setRole('');
            setShifterStatus('');
            setWorkType('');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add Users</Text>

            <View style={styles.inputRow}>
                <Text style={styles.label}>EMP ID:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee ID"
                    value={emp_id}
                    onChangeText={setEmpId}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>EMP Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee Name"
                    value={emp_name}
                    onChangeText={setEmpName}
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Age"
                    value={emp_age}
                    onChangeText={setEmpAge}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Role:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Role"
                    value={role}
                    onChangeText={setRole}
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Shift Status:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Shift Status"
                    value={shifter_status}
                    onChangeText={setShifterStatus}
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Work Type:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Work Type"
                    value={work_type}
                    onChangeText={setWorkType}
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Work Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Worker Email"
                    value={worker_email}
                    onChangeText={setWorker_email}
                />
            </View>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Work Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Work Password"
                    value={worker_password}
                    onChangeText={setWorker_password}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Save to Log-book</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5, // Add more space at the top and bottom
        paddingHorizontal: -10,
        alignItems: 'center',
        backgroundColor: '#4f5b77',
        borderRadius: 15,
        width: '150%',
        maxWidth: Platform.OS === 'web' ? '80%' : '95%',
        maxHeight: Platform.OS === 'web' ? '400%' : '95%',
        alignSelf: 'center',
        flex: 1,
        marginTop:"1%",
        height:'200%',
        paddingBottom:100,
        
        
        
    },
    title: {
        fontSize: width < 350 ? 18 : 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20, // Adjust for better top-bottom spacing
    },
    inputRow: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    label: {
        fontSize: width < 350 ? 13 : 15,
        color: '#fff',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: Platform.OS === 'web' ? 6 : 8,
        height: Platform.OS === 'web' ? 35 : 40,
        width: '65%',  // Reduce the width of input fields
        fontSize: width < 350 ? 13 : 15,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#7c818c',
        paddingVertical: 12,
        paddingHorizontal: width < 350 ? 25 : 45,
        borderRadius: 10,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: width < 350 ? 14 : 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default EmployeeForm_M;
