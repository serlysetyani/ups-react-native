import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { AntDesign, Feather, Octicons  } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/ups.png')} style={styles.upsLogo} />
      </View>

      <View style={styles.content}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 24}}>My Packages</Text>

        <View style={styles.shippingHistory}>
          <AntDesign name="clockcircle" size={24} color="white" />
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16}}>Shipping History</Text>
          <Feather name="chevron-right" size={24} color="white" />
        </View>

        <View style={styles.shipNew}>
          <Octicons name="package" color="white" size={26}/>
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16}}>Ship a new package</Text>
          <Feather name="chevron-right" size={24} color="white" />
        </View>

        <View style={styles.getQuote}>
        <Octicons name="note" size={24} color="white" />
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16}}>Get a quote</Text>
          <Feather name="chevron-right" size={24} color="white" />
        </View>
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
    height: 180,
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
  content:{
    paddingHorizontal: 16,
    paddingTop: 32
  },
  shippingHistory:{
    width: '100%',
    height: 90,
    backgroundColor: '#33425B',
    color: '#FFF',
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  shipNew:{
    width: '100%',
    height: 90,
    backgroundColor: '#484CB0',
    color: '#FFF',
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  getQuote:{
    width: '100%',
    height: 90,
    backgroundColor: '#526ED0',
    color: '#FFF',
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
