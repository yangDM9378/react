import styled, {css} from 'styled-components'

const Container = styled.div`
  display:flex;
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  ${(props) => props.primary && css`
  background: #009cd5;
  color: white;`}
`
export default function App() {
  return (
    <>
      <Container></Container>
      <Button>버튼입니다</Button>
      <Button primary>버튼 Primary</Button>
    </>
  )
}
