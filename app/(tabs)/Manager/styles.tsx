import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom:50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%', 
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal:20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1, // Allow the text to take available space
    paddingRight: 110,
  },
  dateButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  dateText: {
    color: 'darkblue',
  },
  attendanceContainer: {
    marginTop: 35,
    width: '100%', // Ensure full width
    backgroundColor: '#0F0F0F',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensure full width
  },
  statText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  progressCircleContainer: {
    width: '25%', // Adjust based on available space
    height: 100, // Fixed height to fit content
    marginRight: 30,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 25,
    marginTop: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    width: '100%', // Ensure full width
  },
  button: {
    backgroundColor: '#BBE3F2',
    paddingVertical: 10,
    paddingHorizontal: 18,
    margin: 7,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  workloadContainer: {
    width: '100%', // Ensure full width
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  workloadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartImage: {
    width: '100%',
    height: 200,
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
    marginHorizontal: 30,
  },
});