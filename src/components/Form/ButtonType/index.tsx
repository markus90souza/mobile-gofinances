import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

interface ButtonTypeProps extends TouchableOpacityProps {
  title: string
  type: 'income' | 'outcome'
  isActive: boolean
}

const icons = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}

export const ButtonType = ({
  title,
  type,
  isActive,
  ...rest
}: ButtonTypeProps) => {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
