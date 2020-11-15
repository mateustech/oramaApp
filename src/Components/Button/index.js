import React from 'react';

// import {Text} from 'react-native';

import {Container, Text} from './styles';

const Button = ({bg, children, onPress}) => {
  return (
    <Container bg={bg} onPress={onPress}>
      <Text style={{color: '#fff'}}>{children}</Text>
    </Container>
  );
};

export default Button;
