import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'; // Importing Icon for Bottom Navigation

const users = [
  { id: '1', name: 'Micaela Wattenbarger', role: 'Designer' },
  { id: '2', name: 'Kristina Hahn', role: 'Designer' },
  { id: '3', name: 'Eugene Kim', role: 'Developer' },
  { id: '4', name: 'Ravi Pillai', role: 'Developer' },
  { id: '5', name: 'Hannah Lee', role: 'Product Manager' },
];

const User_management = () => {
  const renderItem = ({ item }) => (
    <View style={styles.userRow}>
      <View>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userRole}>{item.role}</Text>
      </View>
      <TouchableOpacity style={styles.viewProfileButton}>
        <Text style={styles.viewProfileText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>User Management</Text>
        <MaterialIcons name="fiber-manual-record" size={10} color="green" style={styles.statusIcon} />
      </View>
      <Text style={styles.tableHeader}>Name</Text>
      <Text style={styles.tableSubHeader}>Role</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New User</Text>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="map-marker-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="alert-circle-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="message-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="account-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  statusIcon: {
    marginLeft: 'auto',
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  tableSubHeader: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 100,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  userRole: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  viewProfileButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  viewProfileText: {
    color: '#1e90ff',
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    paddingVertical: 15,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 10,
  },
});

export default User_management;