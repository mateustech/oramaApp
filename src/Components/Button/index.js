import React from 'react';

// import {Text} from 'react-native';

import {Container, Text} from './styles';

const Button = ({bg, children}) => {
  return (
    <Container bg={bg}>
      <Text style={{color: '#fff'}}>{children}</Text>
    </Container>
  );
};

export default Button;
