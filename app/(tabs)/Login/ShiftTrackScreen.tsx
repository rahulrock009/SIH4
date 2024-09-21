import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions  } from 'react-native';

const ShiftTrackScreen = ({navigateTo}) => {
  const { width, height } = Dimensions.get('window');
  const isLargeScreen = width > 768; // Breakpoint for responsiveness

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image
 // source={require('C:/Users/Home/Desktop/R_na5/myapp/assets/images/coal-pit-workers-overalls-digging-heaps-coal-with-spades-near-carts-truck-smoking-plant-pipes-vector-i[2].png')}
 source={{ uri: 'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-coal-miner-worker-with-shovel-digging-png-image_9991028.png' }}
  style={styles.image}
  resizeMode="contain"
/>       <Text style={styles.title2}>Welcome</Text>
        <Text style={styles.title}>SafeTrak</Text>
        
        <Text style={styles.description}>
         Your Safety , Our Priority. 

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
    width: '130%', // This makes the image responsive
    height: undefined,
    aspectRatio: 1,
    marginBottom: 100,
    marginTop:60,
    position:'relative',
    top:50
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    
  },
  title2: {
    fontSize: 20,
    fontWeight: 400,
    color: '#fff',
    textAlign: 'center',
    
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    marginBottom:100,
    
  },
  buttonContainer: {
  height:50,
  width:50,
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30, // Add some margin for spacing at the bottom
  },
  button: {
    fontSize: 32,
    color: '#4A4A4A',
    marginBottom: 9,
  },
});

export default ShiftTrackScreen;
