import React from 'react'
import Router from './router/Router'
import './App.css'
import CartState from './components/context/cart/CartState'

const App = () => {

  return (
    <>
      <CartState>
        <Router />
      </CartState>
    </>
  )
}

export default App
