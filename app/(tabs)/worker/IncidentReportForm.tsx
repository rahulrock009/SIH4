import React from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IncidentReportForm = ({navigateTo}) => {
  return (
    <View style={styles.container}>
           <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Worker')}>
            <FontAwesome name="arrow-left" style={styles.backIcon} />
          </TouchableOpacity>
      <View style={styles.header}></View>
        <Text style={styles.te}>Incident Report</Text>
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Name and Code */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>NAME:</Text>
            <TextInput style={styles.input} placeholder="Name" />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>CODE:</Text>
            <TextInput style={styles.input} placeholder="Code" />
          </View>
        </View>

        {/* Day, Night, and Date */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>DAY:</Text>
            <TextInput style={styles.checkboxInput} placeholder="" />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>NIGHT:</Text>
            <TextInput style={styles.checkboxInput} placeholder="" />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>DATE:</Text>
            <TextInput style={styles.input} placeholder="Date" />
          </View>
        </View>

        {/* Time */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>TIME:</Text>
            <TextInput style={styles.input} placeholder="Start Time" />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>TO:</Text>
            <TextInput style={styles.input} placeholder="End Time" />
          </View>
        </View>

        {/* Work Type and Tasks */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>WORK TYPE:</Text>
            <TextInput style={styles.input} placeholder="Work Type" />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>TASKS:</Text>
            <TextInput style={styles.input} placeholder="Tasks" />
          </View>
        </View>

        {/* Machine Condition */}
        <Text style={styles.label}>MACHINE CONDITION:</Text>
        <TextInput style={styles.textArea} placeholder="Describe machine condition" multiline />

        {/* Issues and Problems */}
        <Text style={styles.label}>ISSUES & PROBLEMS:</Text>
        <TextInput style={styles.textArea} placeholder="Describe issues and problems" multiline />

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.buttonText}>PROCEED</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A4D66',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 90,
  },
  backButton: {
    marginRight: 10,
    marginTop:10,
    position:'absolute',
    left:20,
    top:15
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
  },
  te:{
    fontSize:40,
    fontWeight:600,
    position:'absolute',
    top:1,

  },
  formContainer: {
    width: '100%',
    maxWidth: '200%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  checkboxInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  textArea: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    height: 80,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  proceedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#4A4D66',
    fontWeight: 'bold',
  },
});

export default IncidentReportForm;
