
import { CartProvider } from './context/cartContext'
import { UserProvider } from './context/userContext'
import { RoutesPage } from './routers/routes'


function App() {
  return (
    <UserProvider>
      <CartProvider>
        <RoutesPage/>
      </CartProvider>
    </UserProvider>
  )
}

export default App
