// app/components/ProductList.jsx
'use client'

import { useState, useEffect } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/Products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className = 'subtitle'>Bakery Products</h2>
      <ul>
        {products.map(p => (
          <li className='product-card' key={p.id}>{p.name} : ${p.price} <button className='button'>Add to Cart</button></li>
        
        ))}
      </ul>
    </div>
  );
}