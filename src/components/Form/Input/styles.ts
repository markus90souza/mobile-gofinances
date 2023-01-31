import { RFValue } from 'react-native-responsive-fontsize'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray300};
  padding: ${RFValue(12)}px ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
  border-radius: ${RFValue(6)}px;
  margin-bottom: ${RFValue(8)}px;
`
