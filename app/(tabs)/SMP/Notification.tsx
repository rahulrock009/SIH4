import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationScreen = () => {
  const notifications = [
    { id: 1, name: 'John Doe and Supervisor Williams', time: '2d', icon: 'account' },
    { id: 2, name: 'Sarah posted a report in Mining Operations', time: '4d', icon: 'account' },
    { id: 3, name: 'Worker Lee and Supervisor Smith', time: '7d', icon: 'account' },
    { id: 4, name: 'Supervisor Brown tagged you in a safety checklist', time: '10d', icon: 'account' },
    { id: 5, name: 'Jake Liu and 4 other workers reported equipment issue', time: '5d', icon: 'account' },
    { id: 6, name: 'Maintenance Team, an account you follow, updated the status', time: '11d', icon: 'account' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Icon name="magnify" size={24} color="#000" />
      </View>

      {/* Notification List */}
      <ScrollView style={styles.notificationList}>
        <Text style={styles.sectionTitle}>New</Text>
        {notifications.slice(0, 4).map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Icon name={notification.icon} size={50} color="#000" style={styles.icon} />
            <View style={styles.notificationText}>
              <Text>{notification.name}</Text>
              <Text style={styles.time}>{notification.time}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.dismissButton}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Earlier</Text>
        {notifications.slice(4).map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Icon name={notification.icon} size={50} color="#000" style={styles.icon} />
            <View style={styles.notificationText}>
              <Text>{notification.name}</Text>
              <Text style={styles.time}>{notification.time}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.dismissButton}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
  },
  notificationText: {
    flex: 1,
  },
  time: {
    color: '#888888',
    fontSize: 12,
  },
  dismissButton: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
});

export default NotificationScreen;