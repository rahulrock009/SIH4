import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions  } from 'react-native';

const ShiftTrackScreen = ({navigateTo}) => {
  const { width, height } = Dimensions.get('window');
  const isLargeScreen = width > 768; // Breakpoint for responsiveness

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image
  source={require('C:/Users/Home/Desktop/R_na5/myapp/assets/images/coal-pit-workers-overalls-digging-heaps-coal-with-spades-near-carts-truck-smoking-plant-pipes-vector-i[2].png')}
  style={styles.image}
  resizeMode="contain"
/>
        <Text style={styles.title}>Welcome to ShiftTrack</Text>
        <Text style={styles.description}>
          Efficiently manages shift scheduling and tracking in coal mines, prioritizing safety compliance, labor management, and operational continuity.
        </Text>
      </View>
      <View style={styles.buttonContainer}  onPress={()=>navigateTo('login')}>
        <Text onPress={()=>navigateTo('login')} style={styles.button}>→</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#586279',
    padding: 16,
    maxHeight:10000,
    position:'static',

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%', // This makes the image responsive
    height: undefined,
    aspectRatio: 1,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32, // Add some margin for spacing at the bottom
  },
  button: {
    fontSize: 24,
    color: '#4A4A4A',
  },
});

export default ShiftTrackScreen;
