import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFValue(12)}px ${RFValue(16)}px;
  border-radius: ${RFValue(6)}px;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray300};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`
