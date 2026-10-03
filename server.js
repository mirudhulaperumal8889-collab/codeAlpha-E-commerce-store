const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Original Unsplash Product Images
const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, category: "Audio", rating: "★★★★☆", discount: "20% OFF", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch Series 7", price: 4999, category: "Wearables", rating: "★★★★★", discount: "15% OFF", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, name: "Gaming Mouse", price: 1299, category: "Accessories", rating: "★★★★☆", discount: "10% OFF", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
  { id: 4, name: "Mechanical Keyboard", price: 3499, category: "Accessories", rating: "★★★★★", discount: "25% OFF", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500" },
  { id: 5, name: "Bluetooth Speaker", price: 1999, category: "Audio", rating: "★★★★☆", discount: "30% OFF", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
  { id: 6, name: "4K Monitor 27-inch", price: 18999, category: "Electronics", rating: "★★★★★", discount: "18% OFF", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" }
];

let orders = [];

// API Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/checkout', (req, res) => {
  const { customerName, email, paymentMethod, items, totalAmount } = req.body;
  const newOrder = {
    orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    customerName,
    email,
    paymentMethod,
    items,
    totalAmount,
    date: new Date().toLocaleDateString()
  };
  orders.push(newOrder);
  res.json({ success: true, order: newOrder });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
