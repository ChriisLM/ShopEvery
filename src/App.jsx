import { Header } from './components/Header'
import { CartProvider } from './context/cartContext'
import { Home } from './pages/Home'

function App() {
  return (
    <CartProvider>
      <Header/>
      <Home/>
    </CartProvider>
  )
}

export default App
