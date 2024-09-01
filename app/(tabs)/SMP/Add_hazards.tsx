import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AddHazard = ({navigateTo}) => {
  const navigation = useNavigation();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hazardDescription, setHazardDescription] = useState("");

  const onChange = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios'); // On iOS, keep it open until manually closed
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleDropdownPress = () => {
    // Add logic for dropdown
    console.log('Dropdown pressed');
  };

  const handleSubmit = () => {
    // Add submit logic
    console.log('Hazard Submitted');
  };

  return (
    <View style={styles.addHazard}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons onPress={()=>navigateTo('risk_d')} name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.header}>Add Hazard</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="black" />
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mine Site</Text>
          <Pressable style={styles.dropdown} onPress={handleDropdownPress}>
            <Text style={styles.dropdownText}>Select</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Risk Level</Text>
          <Pressable style={styles.dropdown} onPress={handleDropdownPress}>
            <Text style={styles.dropdownText}>Select</Text>
            <Ionicons name="chevron-down" size={20} color="#888" />
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hazard Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Describe the hazard"
            value={hazardDescription}
            onChangeText={setHazardDescription}
            multiline
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Expected Control Completion Date</Text>
          <Pressable style={styles.dropdown} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dropdownText}>{selectedDate.toDateString()}</Text>
            <Ionicons name="calendar" size={20} color="#888" />
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};const styles = StyleSheet.create({
  addHazard: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputContainer: {
    marginVertical: 4, // Reduced space between input boxes
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 1,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 8,
    padding: 12,
  },
  dropdownText: {
    color: "#888",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 8,
    padding: 12,
    height: 100,
    textAlignVertical: "top",
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: "#555",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default AddHazard;