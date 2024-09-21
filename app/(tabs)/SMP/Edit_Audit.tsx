import React, { useState } from 'react';
import { View, Text, TextInput, Button,  StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const EditAudit = () => {
  const [hazardCategory, setHazardCategory] = useState('');
  const [hazardChecklist, setHazardChecklist] = useState('');
  const [notes, setNotes] = useState('');
  const [auditStatus, setAuditStatus] = useState('');

  const submitAudit = () => {
    // Handle the form submission logic here
    console.log({
      hazardCategory,
      hazardChecklist,
      notes,
      auditStatus,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Start Audit</Text>

      {/* Select Hazard Category */}
      <Text style={styles.label}>Select Hazard Category</Text>
      <View style={styles.dropdownContainer}>
      <Picker
        selectedValue={hazardCategory}
        onValueChange={(itemValue) => setHazardCategory(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Fire Hazard" value="fire" />
        <Picker.Item label="Chemical Hazard" value="chemical" />
        <Picker.Item label="Electrical Hazard" value="electrical" />
        <Picker.Item label="Physical Hazard" value="physical" />
      </Picker>
      </View>

      {/* Checklist of Hazard Compliance */}
      <Text style={styles.label}>Checklist of Hazard Compliance</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Checklist of Hazard Compliance"
        value={hazardChecklist}
        onChangeText={setHazardChecklist}
      />

      {/* Notes for each Hazard */}
      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Enter Notes for Hazard"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Audit Status (Pass/Fail) */}
      <Text style={styles.label}>Audit Status</Text>
      <View style={styles.auditStatusContainer}>
        <TouchableOpacity
          style={[styles.statusButton, auditStatus === 'Pass' && styles.selectedButton]}
          onPress={() => setAuditStatus('Pass')}
        >
          <Text style={styles.statusButtonText}>Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.statusButton, auditStatus === 'Fail' && styles.selectedButton2]}
          onPress={() => setAuditStatus('Fail')}
        >
          <Text style={styles.statusButtonText}>Fail</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={submitAudit}>
        <Text style={styles.buttonText}>Submit Audit</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#586279', // Blue border for the dropdown to make it stand out
    borderRadius: 8,
    backgroundColor: '#f0f8ff', // Light blue background to indicate it's a dropdown
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  notesInput: {
    height: 100, // Make the notes field larger
  },
  auditStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#586279',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#97BE5A',
  },
  selectedButton2: {
    backgroundColor: '#FF0000',
  },
  statusButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#586279',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 45,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default EditAudit;