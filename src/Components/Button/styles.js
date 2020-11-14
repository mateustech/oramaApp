import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
