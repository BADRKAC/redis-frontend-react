import styled from 'styled-components'
import Header from './components/Header'
import Title from './components/Title'
import TodoList from './components/TodoList'
import img from './common/Back.jpg'

function App() {
  return (
    // <div style={{ backgroundImage:url('/public/Back.jpg')}}>
    <Wrapper>
      <Header />
      <Main>
        <MainContent>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good morning, Badr</Greeting>
            <TodoList />
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
    // </div>
  )
}

export default App

const Wrapper = styled.div`
  background-image: url(${img});
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`
const Main = styled.div`
  display: flex;
`

const MainContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  transition: 0.3s;
`

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`
