import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function SMP_analysis() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Data Analytics</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hazard Risk Levels</Text>
        <Text style={styles.stat}>High</Text>
        <Text style={styles.statValue}>45%</Text>
        <Text style={styles.subText}>this month</Text>

        <Text style={styles.stat}>Medium</Text>
        <Text style={styles.statValue}>30%</Text>
        <Text style={styles.subText}>this month</Text>

        <Text style={styles.stat}>Low</Text>
        <Text style={styles.statValue}>25%</Text>
        <Text style={styles.subText}>this month</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Control Plan Completion</Text>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Completed</Text>
          <Text style={styles.boxValue}>45%</Text>
          <Text style={styles.boxSubText}>this month</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>In Progress</Text>
          <Text style={styles.boxValue}>30%</Text>
          <Text style={styles.boxSubText}>this month</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Not Started</Text>
          <Text style={styles.boxValue}>25%</Text>
          <Text style={styles.boxSubText}>this month</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Incidents Over Time</Text>
        <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.9} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
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
            bezier
            style={styles.chart}
          />
        </View>
        <Text style={styles.boxTitle}>Total Incidents</Text>
        <Text style={styles.boxValue}>45</Text>
        <Text style={styles.subText}>this month</Text>
      </View>

      <View style={styles.filterSection}>
        <View style={styles.filterBox}>
          <Text>Date Range</Text>
          <Text>Last 12 months</Text>
        </View>
        <View style={styles.filterBox}>
          <Text>Location</Text>
          <Text>All locations</Text>
        </View>
        <View style={styles.filterBox}>
          <Text>Hazard Type</Text>
          <Text>All hazard types</Text>
        </View>
        <View style={styles.applyFilters}>
          <Text style={styles.applyFiltersText}>Apply Filters</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stat: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  box: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  boxTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  boxValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  boxSubText: {
    fontSize: 14,
    color: '#777',
  },
  filterSection: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  filterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  applyFilters: {
    marginTop: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  applyFiltersText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});