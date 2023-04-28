import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

const productDetails = [
  {
    productId: '1',
    productPic: 'https://via.placeholder.com/150',
    productName: 'Shoes',
    brand: 'Adidas',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '7$',
    rating: 4,
  },
  {
    productId: '2',
    productPic: 'https://via.placeholder.com/150',
    productName: 'Watch',
    brand: 'Titan',
    productDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '10$',
    rating: 3,
  },
  {
    productId: '3',
    productPic: 'https://via.placeholder.com/150',
    productName: 'T-Shirt',
    brand: 'Nike',
    productDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: '5$',
    rating: 5,
  },
  {
    productId: '4',
    productPic: 'https://via.placeholder.com/150',
    productName: 'Mobile Phone',
    brand: 'Samsung',
    productDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '20$',
    rating: 4,
  },
  {
    productId: '5',
    productPic: 'https://via.placeholder.com/150',
    productName: 'Headphones',
    brand: 'Sony',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '15$',
    rating: 5,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="products">
        {productDetails.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;

