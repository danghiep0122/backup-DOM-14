import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Voucher from './pages/Voucher'
import Account from './pages/Account'
import Checkout from './pages/Checkout'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="cart" element={<Cart />} />
      <Route path="menu" element={<Menu />} />
      <Route path="voucher" element={<Voucher />} />
      <Route path="account-info" element={<Account />} />
    </Routes>
  )
}

export default App
