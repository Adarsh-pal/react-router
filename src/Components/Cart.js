import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Cart = () => {
  return (
    <>
        <h2>Cart</h2>
        <NavLink to='checkout'>Checkout</NavLink>
        <NavLink to='ordered'>Ordered</NavLink>
        <Outlet />
    </>
  )
}
