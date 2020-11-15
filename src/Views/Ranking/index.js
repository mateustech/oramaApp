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

export default function Ranking({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container.flex, { backgroundColor: '#333333' }}>
                <View style={styles.container, { backgroundColor: '#333333' }}>
                    <StatusBar backgroundColor="#119C9F" />

                    <View style={{alignItems: 'flex-end'}}>
                    <View style={{backgroundColor: '#7CC33E', width: 60, height: 60, justifyContent: 'center',  alignItems: 'center', margin: 20, }}>
                        <Text style={{fontSize: 24, color: '#fff'}}>35</Text>
                        <Text>$ Óc</Text>
                    </View>
                    </View>


                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Text style={styles.title}>15º</Text>
                            <Text style={styles.titlerank}>Ranking Amigos</Text>
                        </View>


                        <View style={styles.rank}>
                            <Text style={styles.txtBtn}>1</Text>
                            <Text>Lina Amaral</Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>500 $ Óc</Text>
                        </View>
                        <View style={styles.rank2}>
                            <Text style={styles.txtBtn}>2</Text>
                            <Text>Ricardo Chaves </Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>400 $ Óc</Text>
                        </View>

                        <View style={styles.rank}>
                            <Text style={styles.txtBtn}>3</Text>
                            <Text>Tatiana Lopes </Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>350 $ Óc</Text>
                        </View>

                        <View style={styles.rank2}>
                            <Text style={styles.txtBtn}>4</Text>
                            <Text>Fernando Lobo </Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>333 $ Óc</Text>
                        </View>

                        <View style={styles.rank}>
                            <Text style={styles.txtBtn}>5</Text>
                            <Text>Ricardo Xavier</Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>300 $ Óc</Text>
                        </View>

                        <View style={styles.rank2}>
                            <Text style={styles.txtBtn}>6</Text>
                            <Text>Fernando Chaves</Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>200 $ Óc</Text>
                        </View>

                        <View style={styles.rank}>
                            <Text style={styles.txtBtn}>7</Text>
                            <Text>Ricardo Amaral</Text>
                            <Image
                                style={styles.img}
                                source={require('../../assets/lucros.png')} />
                            <Text style={styles.txtBtn}>150 $ Óc</Text>
                        </View>



                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
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
    titlerank: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    title: {
        // marginTop: 10,
        // marginBottom: 10,
        textAlign: 'center',
        fontSize: 90,
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
    },
    rank: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340,
        height: 65,
        elevation: 5,
        backgroundColor: '#119C9F',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 25,

    },
    rank2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340,
        height: 65,
        elevation: 5,
        backgroundColor: '#0ABF7B',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 25,
    },
    txtBtn: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        margin: 10,
    },
});
