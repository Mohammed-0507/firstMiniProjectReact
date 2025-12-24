import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'

import ProudactCard from './components/proudact-card.jsx'
//import Order from './components/order.jsx'
import coffeImg from './assets/coffe.jpeg'
import teaImg from './assets/tea.jpg'
import croissantImg from './assets/croissant.jpeg'


 export default function App() {
        
    const [page, setPage] = useState("ProudactCard");

    const products = [
        { id: 1, img: coffeImg, name: "Coffe", price: "$19.99" },
        { id: 2, img: teaImg, name: "Tea", price: "$29.99" },
        { id: 3, img: croissantImg, name: "Croissant", price: "$39.99" }
    ];

    const renderPage = () => {
      switch(page) {
        case "ProudactCard":
          return <ProudactCard products={products} />;
        default:
          return <ProudactCard products={products} />;
      }
    }
  return (
    <>
      <Header setPage={setPage} />
      <main>
        {renderPage()}
      </main>
    </>
  )
}

