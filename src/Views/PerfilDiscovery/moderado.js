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
  Dimensions,
} from 'react-native';

export default function Moderado({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container.flex}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#6EA637" />
          <View style={{alignItems: 'center'}}>
            <View>
              <Text style={styles.title}>
                Vamos descobrir que tipo de investidor você é
              </Text>
            </View>
            <View style={styles.btn}>
              <View style={styles.img}>
                <Image
                  style={{width: 250, height: 250}}
                  source={require('../../assets/investidor_moderado.png')}
                />
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 36,
                }}
                activeOpacity={(0.2, 0.5)}
                onPress={() => Alert.alert('MODERADO')}>
                {/* <Image
                  style={styles.imgBtn}
                  source={require('../../assets/fundos.png')}
                /> */}
                <Text style={styles.txtBtn}>MODERADO</Text>
                <Text style={styles.txt}>
                  Procura o equilíbrio entre segurança e lucro acima da média.
                  Maior parte dos seus investimentos está em aplicações
                  conservadoras.
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 40,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: Dimensions.get('window').width - 60,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={
                  {
                    // width: 30,
                    // height: 30,
                    // borderRadius: 15,
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // backgroundColor: '#ddd',
                  }
                }>
                <Text>Prevent </Text>
              </TouchableOpacity>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 160,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 50,
                    height: 15,
                    borderRadius: 7,
                    backgroundColor: '#ddd',
                  }}></View>
                <View
                  style={{
                    width: 50,
                    height: 15,
                    borderRadius: 7,
                    backgroundColor: '#6EA637',
                  }}></View>
                <View
                  style={{
                    width: 50,
                    height: 15,
                    borderRadius: 7,
                    backgroundColor: '#ddd',
                  }}></View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('PerfilArrojado')}
                style={
                  {
                    // width: 30,
                    // height: 30,
                    // borderRadius: 15,
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // backgroundColor: 'rgba(110,166,55,0.3)',
                  }
                }>
                <Text>Next </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    // justifyContent: 'center',
  },
  title: {
    marginTop: 35,
    marginBottom: 150,
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  img: {
    alignItems: 'center',
    bottom: 150,
  },
  txt: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
  },
  btn: {
    // flex: 1,
    // top: -100,
    width: 300,
    height: 280,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
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
