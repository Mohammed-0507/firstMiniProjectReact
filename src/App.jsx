import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import ProudactCard from './components/proudact-card.jsx'
import Order from './components/order.jsx'
import coffeImg from './assets/coffe.jpeg'
import teaImg from './assets/tea.jpg'
import croissantImg from './assets/croissant.jpeg'


 export default function App() {
        const products = [
          { id: 1, img: coffeImg, name: "Coffe", price: "$19.99" },
          { id: 2, img: teaImg, name: "Tea", price: "$29.99" },
          { id: 3, img: croissantImg, name: "Croissant", price: "$39.99" }
      ];
    const [page, setPage] = useState("ProudactCard");
    const [order, setOrder] = useState(null);

    const renderPage = () => {
      switch(page) {
        case "ProudactCard":
          return <ProudactCard products={products} onAdd={(p) => { setOrder(p); setPage('Order'); }} />;
        case "Order":
          return <Order order={order} setPage={setPage} />;
        default:
          return <About />;
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

