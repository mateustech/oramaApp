import React from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  ContentIMG,
  ImageIcon,
  ImageHorizontal,
  ContentActions,
  Line,
} from './styles';

import logo from '../../assets/logo.png';
import logo_name from '../../assets/Logo-orama.png';
import Button from '../../Components/Button';
const Sigin = () => {
  return (
    <Container>
      <ContentIMG>
        <ImageIcon source={logo} />
        <ImageHorizontal source={logo_name} />
      </ContentIMG>
      <ContentActions>
        <Button bg="#0D0D0D">Já tenho uma conta</Button>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Line />
          <Text style={{margin: 5, color: '#6EA637'}}>ou</Text>
          <Line />
        </View>
        <Button bg="#6EA637">Criar uma conta</Button>
      </ContentActions>
    </Container>
  );
};

export default Sigin;
