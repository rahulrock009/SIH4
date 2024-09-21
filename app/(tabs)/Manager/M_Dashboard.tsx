import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;

const M_Dashboard = ({ navigateTo }) => {
  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
  };

  const pieData = [
    {
      name: 'Complete Task',
      population: 186,
      color: '#808080',
      legendFontColor: '#808080',
      legendFontSize: 15,
    },
    {
      name: 'In-progress Task',
      population: 47,
      color: '#4285F4',
      legendFontColor: '#4285F4',
      legendFontSize: 15,
    },
    {
      name: 'On Hold Task',
      population: 23,
      color: '#F4B400',
      legendFontColor: '#F4B400',
      legendFontSize: 15,
    },
    {
      name: 'Review Task',
      population: 48,
      color: '#DB4437',
      legendFontColor: '#DB4437',
      legendFontSize: 15,
    },
  ];

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 65],
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        
        <TouchableOpacity style={styles.dateButton} onPress={() => navigateTo('add_user_m')}>
          <Text style={styles.dateText}>Add User</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Attendance Section */}
        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceHeader}>
            <Text style={styles.sectionTitle}  onPress={()=>navigateTo('login')}>Attendance</Text>
            <Icon name="person" size={30} color="#000" style={styles.personIcon} />
          </View>
          <View style={styles.statisticsContainer}>
            <View>
              <Text style={styles.statText}>Full-time job</Text>
              <Text style={styles.statText}>Part-time work</Text>
              <Text style={styles.statText}>Leave</Text>
            </View>
            <View style={styles.progressCircleContainer}>
              <Text style={styles.progressText}>79%</Text>
            </View>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('shiftmanagement')}>
            <Text style={styles.buttonText}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Workload</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Timeline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>List</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={() => navigateTo('addshift_m')}>
          <Text style={styles.buttonText}>Add_Shift</Text>
        </TouchableOpacity>
        </View>

        {/* Workload Bar Chart Section */}
        <View style={styles.workloadContainer}>
          <Text style={styles.workloadTitle}>Workload</Text>
          <BarChart
            data={barData}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero
            style={{ marginLeft: -10 }}
          />
        </View>

        {/* Task Statistic Section */}
        <View style={styles.container}>
          <Text style={styles.title}>Task Statistic</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>476</Text>
              <Text style={styles.statLabel}>Total Tasks</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>23</Text>
              <Text style={styles.statLabel}>Overdue Tasks</Text>
            </View>
          </View>

          <PieChart
            data={pieData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="security" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="error" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="dashboard" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addText: {
    color: '#007BFF',
  },
  dateButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
  },
  dateText: {
    color: '#FFF',
    fontSize: 16,
  },
  attendanceContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  attendanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  statText: {
    fontSize: 16,
  },
  progressCircleContainer: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 1,
    alignItems: 'center',
    width:10,
    marginLeft:5,
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
  },
  workloadContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  workloadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default M_Dashboard;
