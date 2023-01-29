import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray100};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.purple500};
  align-items: center;
  justify-content: center;
`

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 12px;
`

export const ProfileInfo = styled.View`
  margin-left: ${RFValue(16)}px;
`

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.red500};
  font-size: ${RFValue(24)}px;
`
