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

    const handleAdd = () => {
        if (user) {
            axios.post('http://localhost:3000/adduser', { // Ensure API endpoint is correct
                userId: user._id,
                emp_id,
                emp_name,
                emp_age,
                role,
                shifter_status,
                work_type
            })
            .then((res) => {
                console.log('Employee added:', res.data);
                navigateTo('Manager'); // Navigate to the next screen
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
            <Text style={styles.title}>Employee Report</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Save to Log-book</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#4f5b77',
        borderRadius: 15,
        width: '100%',
        maxWidth: Platform.OS === 'web' ? '60%' : '95%',
        alignSelf: 'center',
        flex: 1,
    },
    title: {
        fontSize: width < 350 ? 20 : 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    inputRow: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: width < 350 ? 14 : 16,
        color: '#fff',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: Platform.OS === 'web' ? 8 : 10,
        height: Platform.OS === 'web' ? 40 : 50,
        fontSize: width < 350 ? 14 : 16,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#7c818c',
        paddingVertical: 15,
        paddingHorizontal: width < 350 ? 30 : 60,
        borderRadius: 10,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: width < 350 ? 16 : 18,
        color: '#fff',
        textAlign: 'center',
    },
});

export default EmployeeForm_M;
