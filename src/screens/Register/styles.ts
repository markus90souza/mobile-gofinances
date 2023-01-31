import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray100};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.purple500};
  width: 100%;
  height: ${RFValue(112)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(18)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(20)}px ${RFValue(24)}px;
  justify-content: space-between;
`
export const Box = styled.View``
