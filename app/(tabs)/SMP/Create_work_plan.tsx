import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CreateWorkPlanScreen = () => {
  const navigation = useNavigation();

  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [controlPlan, setControlPlan] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [personnel, setPersonnel] = useState('');

  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isDueDatePickerVisible, setDueDatePickerVisibility] = useState(false);

  const handleConfirmStartDate = (date) => {
    setStartDate(date.toLocaleDateString());
    setStartDatePickerVisibility(false);
  };

  const handleConfirmDueDate = (date) => {
    setDueDate(date.toLocaleDateString());
    setDueDatePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Work Plan</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Control Plan</Text>
        <TextInput
          style={styles.input}
          placeholder="Select control plan"
          placeholderTextColor="#c4c4c4"
          value={controlPlan}
          onChangeText={setControlPlan}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Task Details</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Task Details"
          placeholderTextColor="#c4c4c4"
          value={taskDetails}
          onChangeText={setTaskDetails}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Assign Personnel</Text>
        <TextInput
          style={styles.input}
          placeholder="Assign personnel"
          placeholderTextColor="#c4c4c4"
          value={personnel}
          onChangeText={setPersonnel}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Start Date</Text>
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => setStartDatePickerVisibility(true)}
        >
          <Text style={styles.dateText}>{startDate || 'Select date'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmStartDate}
          onCancel={() => setStartDatePickerVisibility(false)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Due Date</Text>
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => setDueDatePickerVisibility(true)}
        >
          <Text style={styles.dateText}>{dueDate || 'Select date'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDueDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDueDate}
          onCancel={() => setDueDatePickerVisibility(false)}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('wpsub')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    color: '#000',
  },
  textArea: {
    height: 100,
  },
  datePicker: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
  },
  dateText: {
    color: '#000',
    lineHeight: 40,
  },
  submitButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreateWorkPlanScreen;
