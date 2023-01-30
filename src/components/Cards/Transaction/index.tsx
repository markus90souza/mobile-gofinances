import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryIcon,
  CategoryName,
  Date,
} from './styles'

type ICategory = {
  name: string
  icon: string
}
export type ITransaction = {
  id: number
  type: 'income' | 'outcome'
  title: string
  amount: string
  category: ICategory
  date: string
}

interface TransactionProps {
  data: ITransaction
}

// eslint-disable-next-line no-empty-pattern
export function Transaction({ data }: TransactionProps) {
  const { amount, category, title, date, type } = data
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'outcome' && '- '}
        {amount}
      </Amount>
      <Footer>
        <Category>
          <CategoryIcon name={'dollar-sign'} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}
