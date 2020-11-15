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
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={(styles.container.flex, {backgroundColor: '#fff'})}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#6EA637" />
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{flex: 1, width: 300, height: 50, marginTop: 20}}>
              <Text style={{fontSize: 16}}>Conta</Text>
            </View>
            <View style={{flex: 1, marginHorizontal: 30}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: '#6EA637',
                  marginBottom: 10,
                }}>
                R$ 20.000,00
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#6EA637',
                  marginBottom: 30,
                }}>
                Valor Bruto
              </Text>
              <View style={styles.stxt}>
                <Text style={{color: '#E41010', fontSize: 20}}>Fundos</Text>
                <Text>R$ 5000,00</Text>
              </View>
              <View style={styles.stxt}>
                <Text style={{color: '#9DA00B', fontSize: 20}}>Renda Fixa</Text>
                <Text>R$ 3.000,00</Text>
              </View>
              <View style={styles.stxt}>
                <Text style={{color: '#6EA637', fontSize: 20}}>
                  Conta Corrente
                </Text>
                <Text>R$ 12.000,00</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                marginTop: 20,
              }}>
              <View
                style={{
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  width: 270,
                  marginRight: 20,
                  backgroundColor: '#fff',
                  elevation: 5,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: '#FE8400',
                    fontWeight: '600',
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                  }}>
                  Fale com a Iara
                </Text>
              </View>
              <Image
                style={styles.imgBtn}
                source={require('../../assets/auriculares.png')}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  activeOpacity={(0.2, 0.5)}
                  onPress={() => Alert.alert('carro')}>
                  <Image
                    style={styles.imgBtn}
                    source={require('../../assets/cofrinho2.png')}
                  />
                  <Text style={styles.txtBtn}>Operaçôes em andamento</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  activeOpacity={(0.2, 0.5)}
                  onPress={() => Alert.alert('casa')}>
                  <Image
                    style={styles.imgBtn}
                    source={require('../../assets/beneficios.png')}
                  />
                  <Text style={styles.txtBtn}>Veja seus investimentos</Text>
                </TouchableOpacity>
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
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 35,
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  stxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    marginTop: 20,
    marginBottom: 15,
  },
  btn: {
    flex: 1,
    width: 100,
    height: 150,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 25,
  },
  imgBtn: {
    width: 50,
    height: 50,
    margin: 10,
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
  },
});
