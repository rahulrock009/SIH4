import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import M_Dashboard from '../Manager/M_Dashboard';

const  W_Dashboard = ({navigateTo}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
       
          source={{ uri: 'https://th.bing.com/th/id/OIP.O0PJKqpDtHs-Csp6ruHp5AHaFF?w=2048&h=1408&rs=1&pid=ImgDetMain' }} // Replace with your profile image URL
          style={styles.profileImage}
        />
        <View style={styles.userInfo} >
          <Text   style={styles.userName}>Robin Stewart</Text>
          <Text style={styles.userDetails}>Age: 38 yrs</Text>
          <Text style={styles.userDetails}>Type: Miner</Text>
          <Text style={styles.userDetails}>User ID: 5635915</Text>
        </View>
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText} onPress={()=>navigateTo('w_home')} >Welcome!</Text>
        <Text style={styles.welcomeSubText}>
          Your hub for real-time updates, safety tracking, and efficient work management
        </Text>
        <TouchableOpacity style={styles.viewShiftButton} onPress={()=>navigateTo('viewshift_w')}>
          <Text style={styles.viewShiftButtonText}> View Shift </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reportsSection}>
        <Text style={styles.sectionTitle} onPress={()=>navigateTo('incident_r')}>Recent Reports</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.reportCard}>
            <Text style={styles.reportDate}>Date: 02 Dec 2022</Text>
            <Text style={styles.reportTitle}>Safety Conditions and Protocols in Coal Mining</Text>
            <Text style={styles.reportSubtitle}>Inner Health Diagnostic Centre</Text>
            <Text style={styles.reportScore}>63</Text>
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportDate}>Date: 22 Nov 2022</Text>
            <Text style={styles.reportTitle}>Focuses on automation in coal mining</Text>
            <Text style={styles.reportSubtitle}>Automation, efficiency...</Text>
            <Text style={styles.reportScore}>81</Text>
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportDate}>Date: 22 Nov 2022</Text>
            <Text style={styles.reportTitle}>Focuses on automation in coal mining</Text>
            <Text style={styles.reportSubtitle}>Automation, efficiency...</Text>
            <Text style={styles.reportScore}>81</Text>
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportDate}>Date: 22 Nov 2022</Text>
            <Text style={styles.reportTitle}>Focuses on automation in coal mining</Text>
            <Text style={styles.reportSubtitle}>Automation, efficiency...</Text>
            <Text style={styles.reportScore}>81</Text>
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportDate}>Date: 22 Nov 2022</Text>
            <Text style={styles.reportTitle}>Focuses on automation in coal mining</Text>
            <Text style={styles.reportSubtitle}>Automation, efficiency...</Text>
            <Text style={styles.reportScore}>81</Text>
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportDate}>Date: 22 Nov 2022</Text>
            <Text style={styles.reportTitle}>Focuses on automation in coal mining</Text>
            <Text style={styles.reportSubtitle}>Automation, efficiency...</Text>
            <Text style={styles.reportScore}>81</Text>
          </View>
          {/* Add more reports as needed */}
        </ScrollView>
      </View>

      <View style={styles.teamSection}>
        <Text style={styles.sectionTitle}>My Team</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.teamMember} >
            <Image
               source={{ uri: 'https://th.bing.com/th/id/OIP.VQhc_t7Pljp8zPt3Kvlp6wHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.3' }} // Replace with the team member's image URL
              
              style={styles.teamImage}
            />
            <Text onPress={()=>navigateTo('w_message')} style={styles.teamName}>Steve John</Text>
            <Text style={styles.teamRole}>Blasters</Text>
          </View>
          <View style={styles.teamMember}>
            <Image
              source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with the team member's image URL
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Julin</Text>
            <Text style={styles.teamRole}>Engineer</Text>
          </View>
          <View style={styles.teamMember}>
            <Image
           source={{ uri: 'https://th.bing.com/th/id/OIP.BtrJjaiofixJ8vqqnvx3dQAAAA?w=407&h=600&rs=1&pid=ImgDetMain' }} // Replace with the team member's image URL
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Muling</Text>
            <Text style={styles.teamRole}>Miner</Text>
          </View>
          <View style={styles.teamMember}>
            <Image
           source={{ uri: 'https://static.vecteezy.com/system/resources/previews/035/981/228/non_2x/ai-generated-male-construction-worker-with-helmet-isolated-on-transparent-background-free-png.png' }} // Replace with the team member's image URL
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Muling</Text>
            <Text style={styles.teamRole}>Miner</Text>
          </View>
          
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',

  },
  header: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#2C3E50',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft:250,
    marginTop:20,
  },
  userInfo: {
    marginLeft: -300,

    marginBottom:50,
  },
  userName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  userDetails: {
    color: '#FFF',
    fontSize: 16,
   
  },
  welcomeSection: {
    padding: 20,
    backgroundColor: '#FFEBF0',
    borderRadius: 30,
    margin: 20,
    marginTop:-50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeSubText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  viewShiftButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2C3E50',
    borderRadius: 30,
    alignItems: 'center',
  },
  viewShiftButtonText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft:-10,
  },
  reportsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reportCard: {
    width: 250, // Set a fixed width for horizontal scrolling
    padding: 15,
    backgroundColor: '#D6F0FF',
    borderRadius: 10,
    marginRight: 10,
  },
  reportDate: {
    fontSize: 14,
    color: '#555',
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  reportSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  reportScore: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  teamSection: {
    padding: 20,
  },
  teamMember: {
    alignItems: 'center',
    marginRight: 60,
  },
  teamImage: {
    width: 100,
    height: 120,
    borderRadius: 30,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  teamRole: {
    fontSize: 14,
    color: '#777',
  },
});

export default W_Dashboard;