import './App.css'
import { Navbar } from './components'
import { Home } from './pages'
import { LayoutContainer } from './styled-components'


function App() {


  return (
    <>
      <Navbar />
      <LayoutContainer>
        {/* Algo para modificar */}
        <Home />
      </LayoutContainer>
    </>
  )
}

export default App
