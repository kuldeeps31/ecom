import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Router,Route } from 'react-router-dom'
import ProductSearchPage from './Pages/ProductList'
//import ProductDetailsPage from './Pages/ProductDetailsPage'
import { Toaster } from "react-hot-toast";
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetailsPage'
function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className="min-h-screen bg-gray-100">
        
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
  
  );
}

export default App
