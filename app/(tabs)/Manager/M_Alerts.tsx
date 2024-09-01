import React from 'react';
import { StyleSheet, View, Text,Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
const M_Alerts = ({navigateTo}) => {
  const [selectedRecipient, setSelectedRecipient] = React.useState("Workers");

  const incidentData = [
    { id: '1', date: '12-08-24', incident: 'Equipment failure', status: 'Resolved' },
    { id: '2', date: '19-07-24', incident: 'Minor fire accident', status: 'Unresolved' },
    { id: '3', date: '23-06-24', incident: 'Safety drill conducted', status: 'Resolved' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.date}</Text>
      <Text style={styles.tableCell}>{item.incident}</Text>
      <Text style={styles.tableCell}>{item.status}</Text>
      <View style={styles.tableCellActions}>
        <TouchableOpacity style={styles.buttonSmall}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSmall}>
          <Text style={styles.buttonText}>{item.status === 'Resolved' ? 'Reopen' : 'Resolve'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigateTo('Manager')}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      {/* Alerts and Incidents Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Alerts and Incidents</Text>

        {/* Alert Form */}
        <View style={styles.alertForm}>
          <Text style={styles.label}>Send new alert</Text>
          <Picker
            selectedValue={selectedRecipient}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedRecipient(itemValue)}
          >
            <Picker.Item label="Workers" value="Workers" />
            <Picker.Item label="Managers" value="Managers" />
          </Picker>
          <TextInput style={styles.input} placeholder="Alert Title" />
          <TextInput style={styles.input} placeholder="Alert Message" multiline />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send Alert</Text>
          </TouchableOpacity>
        </View>

        {/* Incident Alerts Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Date</Text>
            <Text style={styles.tableHeaderText}>Incident Notes</Text>
            <Text style={styles.tableHeaderText}>Status</Text>
            <Text style={styles.tableHeaderText}>Actions</Text>
          </View>
          <FlatList
            data={incidentData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Full Report</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      {/* Footer Section */}
      <View style={styles.footer}>
      <TouchableOpacity>
          <Image source={{ uri: 'data:image/png;base64,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' }} style={styles.footerIcon} />
          <Text style={styles.footertext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'data:image/png;base64,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' }} style={styles.footerIcon} />
          <Text style={styles.footertext}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs98eObr7yGomTrCyGxd0OPX3e3GR-SLvJQ&s' }} style={styles.footerIcon} />
          <Text style={styles.footertext}>Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hO_uKSh2znmEXW70dnhO8AU7l8--5b_fWw&s' }} style={styles.footerIcon} />
          <Text style={styles.footertext}>ERP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.footerIcon} />
          <Text style={styles.footertext}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginTop:20,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top:15,
     zIndex:20,
    display:'flex'
  },
  backText: {
    fontSize: 34,
    color: 'white',

  },
  section: {
    marginVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#1C3A4B',
    color: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    zIndex:1,
  },
  alertForm: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  picker: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonSmall: {
    backgroundColor: '#FF6600',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  tableCellActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'white',
    paddingVertical: 10, // Added padding for better spacing
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
  footerText: {
    marginLeft: 50,
  },
});

export default M_Alerts;