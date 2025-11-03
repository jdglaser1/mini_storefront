// app/page.jsx
'use client'



import CartSummary from "./Components/CartSummary"
import ProductList from "./Components/ProductList"

export default function Home(){


  return (
    <div>
      <h1 className='site-header'>Mini Bakery Storefront</h1>
      <ProductList/>
      <CartSummary/>
    </div>
  )
}