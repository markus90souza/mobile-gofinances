import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

type TypeProps = {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.orange500 : theme.colors.white};
  width: ${RFValue(300)}px;
  padding: ${RFValue(20)}px ${RFValue(24)}px;
  padding-bottom: ${RFValue(42)}px;
  border-radius: ${RFValue(4)}px;
  margin-right: ${RFValue(16)}px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.white : theme.colors.black};
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.green500};
    `}

  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.red500};
    `}

    ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.white : theme.colors.black};
  margin-top: ${RFValue(38)}px;
`

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.white : theme.colors.black};
`
