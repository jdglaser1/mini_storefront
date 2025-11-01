// src/app/api/products/route.js

//This page displays the products

export async function GET() {
  const products = [
    { id: 'p1', name: 'Chocolate Chip', price: 1200, category: 'Cookies', stock: 5 },
    { id: 'p2', name: 'Snicker Doodle', price: 150, category: 'Cookies', stock: 3 },
    { id: 'p3', name: 'Lady Lock', price: 900, category: 'Cookies', stock: 4 },
    { id: 'p1', name: 'Pumpkin Pie', price: 1200, category: 'Pies', stock: 5 },
    { id: 'p2', name: 'Apple Pie', price: 150, category: 'Pies', stock: 3 },
    { id: 'p3', name: 'Peach Pie', price: 900, category: 'Pies', stock: 4 },
    { id: 'p1', name: 'Chocolate Cake', price: 1200, category: 'Cakes', stock: 5 },
    { id: 'p2', name: 'Almond Cake', price: 150, category: 'Cakes', stock: 3 },
    { id: 'p3', name: 'Wedding Cake', price: 900, category: 'Cakes', stock: 4 }
  ];
  return Response.json(products);
}