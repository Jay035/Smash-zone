import React from 'react'
import CartItems from './CartItems'

type Props = {}

export default function Cart({}: Props) {
  return (
   <main className='mt-48 px-4 md:px-8 lg:px-10'>
    <h1 className='text-center font-bold text-[#212121] mb-[100px] text-[40px] leading-[48px]'>CART</h1>

    <CartItems />
   </main>
  )
}