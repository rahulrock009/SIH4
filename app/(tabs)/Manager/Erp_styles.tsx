import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFFFFF',
    marginBottom: 10,
    marginTop:10,
  },
  header:{
    width:'100%',
    backgroundColor:'#1C3A4B',
    borderRadius:10,
    marginTop:10,
    marginBottom:10,
  },
  section: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerCell: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#007bff',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  mainButton: {
    padding: 15,
    backgroundColor: '#ff8c00',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  backButton: {
    position: 'absolute',
    left: 0,
  },
  backText: {
    fontSize: 24,
    color: '#333',
    marginLeft:20
  }
});