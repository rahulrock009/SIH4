import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';

const SMPHomeScreen = ({ navigateTo }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} >
          <Text onPress={()=>navigateTo('Manager')}
           style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        {/* Header Section */}
        <Text style={styles.header}>Safety Management Plan (SMP)</Text>

        {/* SMP Buttons Section */}
        <View style={styles.smpGrid}>
          {smpItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.smpButton}
              onPress={() => navigateTo(item.route)} // Handle navigation
            >
              <Text style={styles.smpButtonText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick View Section */}
        <Text style={styles.quickViewHeader}>Quick View</Text>

        <View style={styles.quickViewItem} >
          <View>
            <Text  onPress={()=>navigateTo('harzards')}  style={styles.quickViewTitle}>5 Critical Hazards</Text>
            <Text style={styles.quickViewSubtitle}>Total of 10</Text>
          </View>
          <Image 
            source={{ uri: 'https://i.pinimg.com/564x/b0/44/22/b04422414ca2870f901997070f6e969c.jpg' }} 
            style={styles.quickViewImage} 
          />
        </View>

        <View style={styles.quickViewItem}>
          <View>
            <Text style={styles.quickViewTitle}>3 Pending Audits</Text>
            <Text style={styles.quickViewSubtitle}>Total of 15</Text>
          </View>
          <Image 
            source={{ uri: 'https://i.pinimg.com/originals/c9/3a/23/c93a23f9b2a0e64f0a4fcb8e75e719ee.jpg' }} 
            style={styles.quickViewImage} 
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// Add route information to each item
const smpItems = [
  { title: 'Risk Dashboard', route: 'risk_d' },
  { title: 'Control Plans', route: 'control' },
  { title: 'Work Plan', route: 'work' },
  { title: 'Audit & Reviews', route: 'audit' },
  { title: 'Reports', route: 'reports' },
  { title: 'Notifications', route: 'notifications' },
  { title: 'User Management', route: 'userManagement' },
  { title: 'Analytics', route: 'analytics' },
];

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backText: {
    fontSize: 28,
    color: '#333',
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    marginTop: 35,
  },
  smpGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smpButton: {
    width: '48%',
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smpButtonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  quickViewHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  quickViewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  quickViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  quickViewSubtitle: {
    fontSize: 14,
    color: '#555555',
  },
  quickViewImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});

export default SMPHomeScreen;
