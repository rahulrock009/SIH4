import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ControlPlans = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Control Plans</Text>
                <Icon name="magnify" size={24} color="#333" />
            </View>

            {/* Content */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* Noise Hazard Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Hazard: Noise</Text>
                    <View style={styles.controlItem}>
                        <View style={styles.controlInfo}>
                            <Text style={styles.controlTitle}>Noise Control</Text>
                            <Text style={styles.controlDetails}>Assigned to: Mary Smith, Due date: 09/25/22</Text>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>View details</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlItem}>
                        <View style={styles.controlInfo}>
                            <Text style={styles.controlTitle}>Noise Control</Text>
                            <Text style={styles.controlDetails}>Assigned to: Mary Smith, Due date: 09/25/22</Text>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>View details</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Chemicals Hazard Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Hazard: Chemicals</Text>
                    <View style={styles.controlItem}>
                        <View style={styles.controlInfo}>
                            <Text style={styles.controlTitle}>Chemical Control</Text>
                            <Text style={styles.controlDetails}>Assigned to: Mary Smith, Due date: 09/25/22</Text>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>View details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Buttons */}
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('addcon')}>
                    <Text style={styles.buttonTextAdd}>Add New Control Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('editcon')}>
                    <Text style={styles.buttonTextEdit}>Edit Existing</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 18,
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentContainer: {
        paddingBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    controlItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    controlInfo: {
        flex: 1,
        marginRight: 10,
    },
    controlTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    controlDetails: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        backgroundColor: '#d0d0d0',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    buttonTextEdit: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    buttonTextAdd: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 18,
        paddingHorizontal: 16,
    },
    addButton: {
        backgroundColor: '#606090',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    editButton: {
        backgroundColor: '#d0d0d0',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
});

export default ControlPlans;
