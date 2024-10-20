import { Header } from './components/Header'
import { CartProvider } from './context/cartContext'
import { UserProvider } from './context/userContext'
import { Home } from './pages/Home'

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Header/>
        <Home/>
      </CartProvider>
    </UserProvider>
  )
}

export default App
