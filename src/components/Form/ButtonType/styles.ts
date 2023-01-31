import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type TypeProps = {
  type: 'income' | 'outcome'
}

type IContainerProps = {
  isActive: boolean
  type: 'income' | 'outcome'
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray300};
  border-radius: ${RFValue(6)}px;
  padding: ${RFValue(12)}px;
  justify-content: center;

  ${({ isActive, type }) =>
    isActive &&
    type === 'income' &&
    css`
      background-color: ${({ theme }) => theme.colors.green300};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === 'outcome' &&
    css`
      background-color: ${({ theme }) => theme.colors.red300};
    `}
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;

  ${({ type }) =>
    type === 'income' &&
    css`
      color: ${({ theme }) => theme.colors.green500};
    `}

  ${({ type }) =>
    type === 'outcome' &&
    css`
      color: ${({ theme }) => theme.colors.red500};
    `}
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`
