import React from 'react'
import { Outlet } from 'react-router-dom'

export const Checkout = () => {
  return (
    <>
        <div>Products ready for Checkout</div>
        <Outlet />
    </>
  )
}
