//app/catalog/Catalog.jsx

'use client'

import ProductList from "./Components/ProductList"

export default function Catalog(){

  return (
    <div>
      <h1 className='site-header'>Mini Bakery Storefront</h1>
      <ProductList/>
    </div>
  )
}