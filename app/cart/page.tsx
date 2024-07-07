import React from 'react'
import CartItems from './CartItems'

type Props = {}

export default function Cart({}: Props) {
  return (
   <main className='mt-24'>
    <h1>CART</h1>

    <CartItems />
   </main>
  )
}