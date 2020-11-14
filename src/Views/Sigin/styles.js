import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export const Container = styled.View`
  background-color: #fff;
  display: flex;
  height: ${h};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentIMG = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageIcon = styled.Image`
  width: 89px;
  height: 89px;
`;
export const ImageHorizontal = styled.Image`
  width: 200px;
  height: 76px;
`;
export const ContentActions = styled.View`
  margin-top: 80px;
  display: flex;
`;

export const Line = styled.View`
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: #6ea637;
  width: 135px;
  height: 3px;
`;
