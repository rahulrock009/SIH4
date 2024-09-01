import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Worker_Message({navigateTo}) {
  return (
    <View style={styles.container}>
      <View style={styles.dashboardHeader}>
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Worker')}>
            <FontAwesome name="arrow-left" style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2762098/pexels-photo-2762098.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
              style={styles.userImg}
            />
            <Text style={styles.userName}>Ramesh</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <FontAwesome name="phone" style={styles.phoneIcon} />
          <FontAwesome name="video-camera" style={styles.videoIcon} />
        </View>
      </View>

      <View style={styles.chatBox}>
        <View style={styles.messageContainer}>
          <View style={[styles.message, styles.received]}>
            <Text style={styles.messageText}>
              We're in the implementation phase after completing the design
            </Text>
          </View>
          <View style={[styles.message, styles.sent]}>
            <Text style={styles.messageText}>
              What's the project status?
            </Text>
          </View>
          <View style={[styles.message, styles.received]}>
            <Text style={styles.messageText}>
              We had some challenges, but we'll be back on schedule by the end of the week.
            </Text>
          </View>
          <View style={[styles.message, styles.sent]}>
            <Text style={styles.messageText}>
              Good, keep me informed of any major updates😊
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Message" />
        </View>
      </View>

      <View style={styles.taskbar}>
        <TouchableOpacity style={styles.taskbarItem}>
          <FontAwesome name="home" style={styles.taskbarIcon} />
          <Text style={styles.taskbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskbarItem}>
          <FontAwesome name="exclamation-circle" style={styles.taskbarIcon} />
          <Text style={styles.taskbarText}>Unsafe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskbarItem}>
          <FontAwesome name="exclamation-triangle" style={styles.taskbarIcon} />
          <Text style={styles.taskbarText}>Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskbarItem}>
          <FontAwesome name="envelope" style={styles.taskbarIcon} />
          <Text style={styles.taskbarText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskbarItem}>
          <FontAwesome name="user-circle" style={styles.taskbarIcon} />
          <Text style={styles.taskbarText}>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  dashboardHeader: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  phoneIcon: {
    fontSize: 20,
    color: '#000',
    marginRight: 10,
  },
  videoIcon: {
    fontSize: 20,
    color: '#000',
  },
  chatBox: {
    flex: 1,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  message: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '70%',
    
  },
  received: {
    backgroundColor: '#54698d',
    alignSelf: 'flex-start',
    color: 'white',
   
  },
  sent: {
    backgroundColor: '#eaeaea',
    alignSelf: 'flex-end',
   
  },
  messageText: {
    color: 'black',
    fontSize: 14,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
  },
  taskbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#54698d',
  },
  taskbarItem: {
    alignItems: 'center',
  },
  taskbarIcon: {
    fontSize: 24,
    color: 'white',
  },
  taskbarText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});