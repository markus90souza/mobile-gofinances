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
} from './styles'

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
    </Container>
  )
}
