import {
  Container,
  Greeting,
  Header,
  Wrapper,
  Photo,
  Profile,
  ProfileInfo,
  Username,
  Icon,
  HighlightCards,
  Transactions,
  TransactionTitle,
} from './styles'

import { Highlight } from '@components/Cards/Highlight'
import { Transaction } from '@components/Cards/Transaction'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { FlashList } from '@shopify/flash-list'

interface DashboardProps {}

// eslint-disable-next-line no-empty-pattern
export function Dashboard({}: DashboardProps) {
  const data = [
    {
      id: 1,
      type: 'outcome',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
      amount: '12.000,00',
      title: 'Desenvolvimento web',
      date: '11/02/2022',
    },
    {
      id: 3,
      type: 'income',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
      amount: '12.000,00',
      title: 'Desenvolvimento web 1',
      date: '11/02/2022',
    },
    {
      id: 2,
      type: 'income',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
      amount: '12.000,00',
      title: 'Desenvolvimento web 2',
      date: '11/02/2022',
    },
  ]

  return (
    <Container>
      <Header>
        <Wrapper>
          <Profile>
            <Photo source={{ uri: 'https://github.com/markus90souza.png' }} />
            <ProfileInfo>
              <Greeting>Olá</Greeting>
              <Username>Marcos</Username>
            </ProfileInfo>
          </Profile>

          <Icon name="power" />
        </Wrapper>
      </Header>

      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
      >
        <Highlight
          type="down"
          title="Saida"
          amount="14.000,00"
          lastTransaction="12 de Feveiro"
        />
        <Highlight
          type="up"
          title="Entrada"
          amount="12.000,00"
          lastTransaction="11 de Feveiro"
        />

        <Highlight
          type="total"
          title="Total"
          amount="2.000,00"
          lastTransaction="11 de Feveiro"
        />
      </HighlightCards>

      <Transactions>
        <TransactionTitle>Listagem</TransactionTitle>

        <FlashList
          estimatedItemSize={10}
          keyExtractor={(i) => i.title}
          data={data}
          renderItem={({ item }) => <Transaction data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 20,
          }}
        />
      </Transactions>
    </Container>
  )
}
