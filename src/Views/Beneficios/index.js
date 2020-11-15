/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

export default function Beneficio({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container.flex}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#6EA637" />
          <View style={{alignItems: 'center', width: 250}}>
            <View>
              <Text style={styles.title}>
                Troque suas moedas por benefícios
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 25}}>
              <View
                style={{
                  width: 156,
                  height: 50,
                  backgroundColor: '#119C9F',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginRight: 30,
                }}>
                <Text
                  style={{fontSize: 30, color: '#fff', textAlign: 'center'}}>
                  35
                </Text>
                <Text
                  style={{fontSize: 15, color: '#fff', textAlign: 'center'}}>
                  Órama Coins
                </Text>
              </View>
              <View
                style={{
                  width: 156,
                  height: 50,
                  backgroundColor: '#7CC33E',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Image
                  style={styles.img}
                  source={require('../../assets/emoji_events-24px.png')}
                />
                <Text
                  style={{fontSize: 30, color: '#fff', textAlign: 'center'}}>
                  15º
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{marginBottom: 20}}>
                <Image
                  style={styles.imgloja}
                  source={require('../../assets/cadeira_eames.png')}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.desc}>Cadeira Eames </Text>
                  <Text style={styles.value}>200 $ Óc</Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}>
                <Image
                  style={styles.imgloja}
                  source={require('../../assets/bike.png')}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.desc}>Trek Bike</Text>
                  <Text style={styles.value}>5.000 $ Óc</Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}>
                <Image
                  style={styles.imgloja}
                  source={require('../../assets/drone.png')}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.desc}>Drone </Text>
                  <Text style={styles.value}>450 $ Óc</Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}>
                <Image
                  style={styles.imgloja}
                  source={require('../../assets/google.png')}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.desc}>Google Home </Text>
                  <Text style={styles.value}>100 $ Óc</Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}>
                <Image
                  style={styles.imgloja}
                  source={require('../../assets/maquina_fotografica.png')}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.desc}>Camera Vintage </Text>
                  <Text style={styles.value}>10.000 $ Óc</Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}>
                <Image
                  style={styles.imgloja}
                  source={require('../../assets/rock_bar.png')}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.desc}>2 drinks no Rock Bar</Text>
                  <Text style={styles.value}>30 $ Óc</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 35,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  img: {
    width: 40,
    height: 40,
  },
  imgloja: {
    width: 170,
    height: 220,
    marginBottom: 15,
  },
  desc: {
    color: '#A9A9B0',
    marginBottom: 5,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  txt: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
  },
  btn: {
    flex: 1,
    top: -10,
    width: 300,
    height: 270,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  txtBtn: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imgBtn: {
    width: 70,
    height: 70,
    marginTop: 20,
  },
});
