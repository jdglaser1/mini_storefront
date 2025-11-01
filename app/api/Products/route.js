// src/app/api/products/route.js

//This page displays the products

export async function GET() {
  const products = [
    { id: 'p1', name: 'Chocolate Chip', price: 1.99, category: 'Cookies', stock: 50 },
    { id: 'p2', name: 'Snicker Doodle', price: 2.99, category: 'Cookies', stock: 35 },
    { id: 'p3', name: 'Lady Lock', price: 3.99, category: 'Cookies', stock: 100 },
    { id: 'p1', name: 'Pumpkin Pie', price: 12.99, category: 'Pies', stock: 15 },
    { id: 'p2', name: 'Apple Pie', price: 13.99, category: 'Pies', stock: 10 },
    { id: 'p3', name: 'Peach Pie', price: 14.99, category: 'Pies', stock: 12 },
    { id: 'p1', name: 'Chocolate Cake', price: 24.99, category: 'Cakes', stock: 5 },
    { id: 'p2', name: 'Almond Cake', price: 30.99, category: 'Cakes', stock: 3 },
    { id: 'p3', name: 'Wedding Cake', price: 199.99, category: 'Cakes', stock: 3 }
  ];
  return Response.json(products);
}