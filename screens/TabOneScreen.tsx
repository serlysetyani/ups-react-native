import * as React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather, Octicons  } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/ups.png')} style={styles.upsLogo} />
        <TextInput style={styles.searchBar} placeholder="Enter a tracking number" placeholderTextColor="#000"/>
      </View>
      <View style={styles.content}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 24}}>My Packages</Text>

        <View style={styles.shippingHistory}>
          <Image source={require('../assets/images/blue.png')} style={styles.imageStatus}/>
          <View style={{flexDirection: 'column', marginLeft: -40}}>
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>#YE9123456789</Text>
            <Text style={{ color: '#BCC2C6',}}>Out of delivery today</Text>
          </View>
          <Feather name="chevron-right" size={24} color="#1A60C1" />
        </View>

        <View style={styles.shippingHistory}>
          <Image source={require('../assets/images/green.png')} style={styles.imageStatus}/>
          <View style={{flexDirection: 'column', marginLeft: -40}}>
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>#YE9123456789</Text>
            <Text style={{ color: '#BCC2C6'}}>Out of delivery today</Text>
          </View>
          <Feather name="chevron-right" size={24} color="#1A60C1" />
        </View>
      <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    width: '100%',
    height: 220,
    backgroundColor: '#1A60C1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  upsLogo: {
    width: 70,
    height: 70,
    marginBottom: 24
  },
  searchBar: {
    width: '100%',
    backgroundColor: '#FFF',
    height: 48,
    color: '#000',
    borderRadius: 4,
    padding: 15
  },
  content:{
    paddingHorizontal: 16,
    paddingTop: 32
  },
  shippingHistory:{
    width: '100%',
    height: 90,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#BCC2C6',
    color: '#000',
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  imageStatus:{
    width: 45,
    height: 45,
  }
});
