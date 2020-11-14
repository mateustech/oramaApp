import React, {useEffect} from 'react';
// import {Image} from 'react-native';
import {Container, ContentIMG, ImageIcon, ImageHorizontal} from './styles';

import logo from '../../assets/logo.png';
import logo_name from '../../assets/Logo-orama.png';

function Splash({navigation}) {
  useEffect(() => {
    setInterval(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <Container>
      <ContentIMG>
        <ImageIcon source={logo} />
        <ImageHorizontal source={logo_name} />
      </ContentIMG>
    </Container>
  );
}

export default Splash;
