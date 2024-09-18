import React from 'react'
import Home from './Pages/Home'
import Style from "styled-components"
const App = () => {
  return (
    <Container >
      <Home />
    </Container>
  )
}

export default App

const Container = Style.div`

max-width: 1200px;
margin: 0 auto;
padding: 0 1rem;
width: 100%;
`