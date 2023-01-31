import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

interface SelectCategoryProps extends TouchableOpacityProps {
  title: string
}

export function SelectCategory({ title, ...rest }: SelectCategoryProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  )
}
