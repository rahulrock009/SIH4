import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const AddControlPlan = () => {
  const navigation = useNavigation();

  // States for form fields
  const [hazard, setHazard] = useState('');
  const [controlProcedures, setControlProcedures] = useState('');
  const [responsiblePerson, setResponsiblePerson] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [attachment, setAttachment] = useState('');
  const [selectedHazard, setSelectedHazard] = useState('');
  const [selectedResponsiblePerson, setSelectedResponsiblePerson] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Control Plan</Text>
      </View>

      {/* Form Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Hazard Selection */}
        <Text style={styles.label}>Hazard</Text>
        <Picker
          selectedValue={selectedHazard}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedHazard(itemValue)}
        >
          <Picker.Item label="Noise" value="Noise" />
          <Picker.Item label="Chemicals" value="Chemicals" />
          {/* Add more items as needed */}
        </Picker>

        {/* Control Procedures */}
        <Text style={styles.label}>Control Procedures</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter control procedures"
          multiline
          value={controlProcedures}
          onChangeText={setControlProcedures}
        />

        {/* Responsible Person */}
        <Text style={styles.label}>Responsible Person</Text>
        <Picker
          selectedValue={selectedResponsiblePerson}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedResponsiblePerson(itemValue)}
        >
          <Picker.Item label="John Doe" value="John Doe" />
          <Picker.Item label="Jane Doe" value="Jane Doe" />
          {/* Add more items as needed */}
        </Picker>

        {/* Due Date */}
        <Text style={styles.label}>Due Date</Text>
        <TouchableOpacity style={styles.datePicker} onPress={() => {/* Handle date selection */}}>
          <Text style={styles.datePickerText}>{dueDate || 'Select date'}</Text>
          <Icon name="calendar" size={24} color="#666" />
        </TouchableOpacity>

        {/* Attachments */}
        <Text style={styles.label}>Attachments</Text>
        <TouchableOpacity style={styles.fileUpload} onPress={() => {/* Handle file upload */}}>
          <Text style={styles.fileUploadText}>{attachment || 'Upload file'}</Text>
          <Icon name="paperclip" size={24} color="#666" />
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('consub')}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  textArea: {
    height: 170,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top', // Ensures text starts from the top
    marginBottom: 20,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  datePickerText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  fileUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  fileUploadText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  submitButton: {
    backgroundColor: '#666',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddControlPlan;
