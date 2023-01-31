import { useState } from 'react'

import { Container, Form, Header, Title, Box, BoxType } from './styles'

import { Button } from '@components/Form/Button'
import { ButtonType } from '@components/Form/ButtonType'
import { Input } from '@components/Form/Input'

interface RegisterProps {}

// eslint-disable-next-line no-empty-pattern
export function Register({}: RegisterProps) {
  const [transactionType, setTransactionType] = useState('')
  const handleSelectType = (type: 'income' | 'outcome') => {
    setTransactionType(type)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Box>
          <Input placeholder="Sua dispesa" />
          <Input placeholder="Sua dispesa" />
          <BoxType>
            <ButtonType
              title="Entrada"
              type="income"
              onPress={() => handleSelectType('income')}
              isActive={transactionType === 'income'}
            />
            <ButtonType
              title="Saida"
              type="outcome"
              onPress={() => handleSelectType('outcome')}
              isActive={transactionType === 'outcome'}
            />
          </BoxType>
        </Box>

        <Button title="Entrar" activeOpacity={0.7} />
      </Form>
    </Container>
  )
}
