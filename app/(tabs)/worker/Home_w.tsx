import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home_w = () => {
  const [activeSection, setActiveSection] = useState('work'); 

  const workerReports = [
    { id: 1, date: '2024-08-01', hoursWorked: 8, activity: 'Routine Check' },
    { id: 2, date: '2024-08-02', hoursWorked: 7, activity: 'Maintenance' },
  ];

  const gpsReports = [
    { time: '10:25 AM', details: 'Check IN' },
    { time: '10:45 AM', details: 'Snack' },
    { time: '11:05 AM', details: 'Machine Handle' },
    { time: '12:00 PM', details: 'Lunch' },
    { time: '3:30 PM', details: 'Check OUT' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DASHBOARD</Text>
        </View>
        <View style={styles.attendanceHeader}>
          <TouchableOpacity style={styles.attendanceLink}>
            <Text style={styles.attendanceLinkText}>Equipment status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.seeMoreLink}>
            <Text style={styles.seeMoreLinkText}>See More</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal ScrollView for Equipment Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Helmet</Text>
            <Text>ID/Serial Number: HL-56789</Text>
            <Text>Location: Mining Site</Text>
            <Text>Status: Good</Text>
            <View style={styles.cardActions}>
              <TouchableOpacity>
                <Icon name="file-document-edit-outline" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="share-outline" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="download-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Protective Equipment</Text>
            <Text>Equipment Number: PR-87654</Text>
            <Text>Location: Mining Site</Text>
            <Text>Status: Good</Text>
            <View style={styles.cardActions}>
              <TouchableOpacity>
                <Icon name="file-document-edit-outline" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="share-outline" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="download-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.attendanceHeader}>
          <TouchableOpacity style={styles.attendanceLink}>
            <Text style={styles.attendanceLinkText}>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.seeMoreLink}>
            <Text style={styles.seeMoreLinkText}>See More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceBox}>
            <Text style={styles.attendanceNumber}>39</Text>
            <Text style={styles.attendanceLabel}>WORKED DAYS</Text>
          </View>
          <View style={styles.attendanceBox}>
            <Text style={styles.attendanceNumber}>08</Text>
            <Text style={styles.attendanceLabel}>LEAVE DAYS</Text>
          </View>
        </View>

        <View style={styles.navLinks}>
          <TouchableOpacity
            style={[styles.navLink, activeSection === 'gps' && styles.activeNavLink]}
            onPress={() => setActiveSection('gps')}
          >
            <Text style={styles.navLinkText}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navLink, activeSection === 'log' && styles.activeNavLink]}
            onPress={() => setActiveSection('log')}
          >
            <Text style={styles.navLinkText}>Log</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navLink, activeSection === 'work' && styles.activeNavLink]}
            onPress={() => setActiveSection('work')}
          >
            <Text style={styles.navLinkText}>GPS Report</Text>
          </TouchableOpacity>
         
        </View>

        {activeSection === 'gps' && (
          <View style={styles.gpsContainer}>
            <Text style={styles.gpsTitle}>Worker Tracker</Text>

            {/* Timeline Tracker */}
            <View style={styles.gpsTracker}>
              {gpsReports.map((report, index) => (
                <View key={index}>
                  <View style={styles.timeline}>
                    <View style={styles.timelineMarker} />
                    {index < gpsReports.length && <View style={styles.timelineConnector} />}
                  </View>
                  <View style={styles.gpsLog}>
                    <Text style={styles.gpsLogTime}>{report.time}</Text>
                    <Text style={styles.gpsLogDetails}>{report.details}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {activeSection === 'work' && (
          <View style={styles.workContainer}>
            <Text style={styles.workTitle}>GPS Tracker</Text>
            {/* Vertical ScrollView for Work Tracker */}
            <ScrollView style={styles.workTracker}>
              <Text>Work tracking details go here.</Text>
              {/* Add more content here as needed */}
            </ScrollView>
          </View>
        )}

        {activeSection === 'log' && (
          <View style={styles.logContainer}>
            <Text style={styles.logTitle}>Worker Reports</Text>
            {workerReports.map(report => (
              <View key={report.id} style={styles.logCard}>
                <Text style={styles.logDate}>{report.date}</Text>
                <Text style={styles.logDetails}>Hours Worked: {report.hoursWorked}</Text>
                <Text style={styles.logDetails}>Activity: {report.activity}</Text>
              </View>
            ))}
          </View>
        )}
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
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 80, // Add padding to ensure content isn't hidden behind the bottom nav
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 10,
    width: 250,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navLink: {
    padding: 10,
  },
  activeNavLink: {
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
    
  },
  navLinkText: {
    fontSize: 16,
    color: '#000',
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  attendanceLink: {
    padding: 1,
  },
  attendanceLinkText: {
    fontSize: 16,
    color: '#007BFF',
  },
  seeMoreLink: {
    padding: 1,
  },
  seeMoreLinkText: {
    fontSize: 16,
    color: '#007BFF',
  },
  attendanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  attendanceBox: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  attendanceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  attendanceLabel: {
    fontSize: 16,
    color: '#555',
  },
  workContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    
  },
  workTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  workTracker: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 10,
    height: 100, // Adjust the height as needed
  },
  logContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    height:"40%"
  },
  logTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logCard: {
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  logDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logDetails: {
    fontSize: 14,
    color: '#555',
  },
  gpsContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom:50
  },
  gpsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  gpsTracker: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 10,
  },
  timeline: {
    width: 40,
    alignItems: 'center',
  },
  timelineMarker: {
    width: 10,
    height: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  timelineConnector: {
    width: 2,
    height: 50,
    backgroundColor: '#007BFF',
  },
  gpsLog: {
    flex: 1,
    marginLeft: 10,
    height:53,
   
  },
  gpsLogTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gpsLogDetails: {
    fontSize: 14,
    color: '#555',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FFF',
  },
});

export default Home_w;