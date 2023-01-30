import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

type TypeProps = {
  type: 'income' | 'outcome'
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: ${RFValue(6)}px;
  margin-bottom: ${RFValue(16)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;

  color: ${({ type, theme }) =>
    type === 'income' ? theme.colors.green500 : theme.colors.red500};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(18)}px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray300};
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray300};
  margin-left: ${RFValue(16)}px;
`

export const Date = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray300};
`
