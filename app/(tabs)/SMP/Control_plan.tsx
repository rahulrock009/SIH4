import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Control_plan = () => {
  const progressData = [
    { id: 'Q1', value: 0.6 },
    { id: 'Q2', value: 0.4 },
    { id: 'Q3', value: 0.5 },
    { id: 'Q4', value: 0.8 },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>Control Plan Completion</Text>
        <Text style={styles.percentage}>40%</Text>
        <Text style={styles.subText}>+20%</Text>

        <FlatList
          data={progressData}
          keyExtractor={item => item.id}
          scrollEnabled={false} // Disable scrolling
          renderItem={({ item }) => (
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressTextWrapper}>
                <Text style={styles.quarterText}>{item.id}</Text>
                <View style={[styles.progressBarContainer, { width: windowWidth * 0.6 }]}>
                  <View
                    style={[
                      styles.progressBar,
                      {
                        width: `${item.value * 100}%`,
                        backgroundColor: '#76c7c0', // Example color for progress
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          )}
        />

        <Text style={styles.header}>Incidents Over Time</Text>
        <Text style={styles.subText}>Last 6 Months -50%</Text>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width * 0.9}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={styles.chart}
        />

        <Text style={styles.header}>Hazard Risk Levels</Text>
        <FlatList
          data={[
            { id: 'High', value: 0.3 },
            { id: 'Medium', value: 0.4 },
            { id: 'Low', value: 0.6 },
          ]}
          keyExtractor={item => item.id}
          scrollEnabled={false} // Disable scrolling
          renderItem={({ item }) => (
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressTextWrapper}>
                <Text style={styles.quarterText}>{item.id}</Text>
                <View style={[styles.progressBarContainer, { width: windowWidth * 0.6 }]}>
                  <View
                    style={[
                      styles.progressBar,
                      {
                        width: `${item.value * 100}%`,
                        backgroundColor: '#76c7c0', // Example color for progress
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Dashboard</Text>
        <Text style={styles.footerText}>Analytics</Text>
        <Text style={styles.footerText}>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20, // Add padding at the bottom to make room for the footer
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  progressTextWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  quarterText: {
    width: 60,
    textAlign: 'left',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 16,
    color: '#888',
  },
});

export default Control_plan;