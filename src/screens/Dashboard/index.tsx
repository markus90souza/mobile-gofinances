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
} from './styles'

import { Highlight } from '@components/Cards/Highlight'

interface DashboardProps {}

// eslint-disable-next-line no-empty-pattern
export function Dashboard({}: DashboardProps) {
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
    </Container>
  )
}
