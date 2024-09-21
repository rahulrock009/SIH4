import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const WorkPlansScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Work plans</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>⚙</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.buttonText}>Invite team</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newWorkPlanButton} onPress={() => navigation.navigate('adwp')}>
          <Text style={styles.buttonTextcreate}>Create new work plan</Text>
        </TouchableOpacity>
      </View>

      {/* Work Plan Items */}
      <TouchableOpacity style={styles.workPlanItem} onPress={() => navigation.navigate('wpdet')}>
        <View style={styles.workPlanHeader}>
          <Text style={styles.workPlanTitle}>Manage workers in hazards</Text>
          <Text style={styles.workPlanSubTitle}>Marketing · 9 people</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.workPlanImage} />
        <Text style={styles.statusText}>In progress</Text>
        {/* Using the ProgressBarAndroid component */}
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.37} // Set progress between 0 and 1 (0.37 represents 37%)
          color="#6200EE"
        />
        <Text style={styles.progressText}>37%</Text>
      </TouchableOpacity>

      <View style={styles.workPlanItem}>
        <View style={styles.workPlanHeader}>
          <Text style={styles.workPlanTitle}>Hiring Plan for 2023</Text>
          <Text style={styles.workPlanSubTitle}>HR · 4 people</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.workPlanImage} />
        <Text style={styles.statusText}>Open</Text>
        <Text style={styles.statusSubText}>In progress</Text>
        {/* Another usage of ProgressBarAndroid component */}
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.2} // Set progress between 0 and 1 (0.2 represents 20%)
          color="#6200EE"
        />
        <Text style={styles.progressText}>20%</Text>
      </View>
    </ScrollView>
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
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 10,
  },
  settingsText: {
    fontSize: 16,
    color: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inviteButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  newWorkPlanButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
  buttonTextcreate: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  workPlanItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  workPlanHeader: {
    marginBottom: 10,
  },
  workPlanTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  workPlanSubTitle: {
    color: '#888',
  },
  workPlanImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  statusText: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusSubText: {
    color: '#555',
  },
  progressText: {
    textAlign: 'right',
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
});

export default WorkPlansScreen;
