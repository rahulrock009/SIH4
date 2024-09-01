import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Create() {
  return (
    <SafeAreaView style={styles.container}>

<View style={styles.con}>
      <Text style={styles.st_text}>Get Started</Text>
      <Text style={styles.st_text1}>by creating a free account</Text>
      <View>
        <View>
            <Text></Text>
        </View>
<View style>

</View>
      </View>
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
      },
      st_text:{
        fontSize:70
      },
      st_text1:{
fontSize:20,
fontWeight:350,
margin:20,
marginLeft:60
      }
      
      
})