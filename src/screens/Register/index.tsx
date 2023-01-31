import { Button } from '@components/Form/Button'
import { Input } from '@components/Form/Input'
import { Container, Form, Header, Title, Box } from './styles'

interface RegisterProps {}

// eslint-disable-next-line no-empty-pattern
export function Register({}: RegisterProps) {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Box>
          <Input placeholder="Sua dispesa" />
          <Input placeholder="Sua dispesa" />
        </Box>

        <Button title="Entrar" activeOpacity={0.7} />
      </Form>
    </Container>
  )
}
