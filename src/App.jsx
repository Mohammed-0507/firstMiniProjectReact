import { useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import ProudactCard from "./components/proudact-card.jsx";
import coffeImg from "./assets/coffe.jpeg";
import teaImg from "./assets/tea.jpg";
import croissantImg from "./assets/croissant.jpeg";
import OrderCard from "./components/order.jsx";
import Login from "./components/login.jsx";
//import { useEffect } from 'react';

export default function App() {
  const [page, setPage] = useState("login");
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, img: coffeImg, name: "Coffe", price: 19.99 },
    { id: 2, img: teaImg, name: "Tea", price: 29.99 },
    { id: 3, img: croissantImg, name: "Croissant", price: 39.99 },
    { id: 4, img: croissantImg, name: "Croissant", price: 39.99 },
  ];

  const logins = [
    { id: 1, username: "user1", password: "pass1" },
    { id: 2, username: "user2", password: "pass2" },
  ];

  // Filter products by search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderPage = () => {
    switch (page) {
      case "ProudactCard":
        return <ProudactCard products={filteredProducts} />;
      case "skills":
        return <OrderCard />;
      case "login":
        return <Login users={logins} setPage={setPage} />;
      default:
        return <ProudactCard products={filteredProducts} />;
    }
  };

  return (
    <>
      <Header setPage={setPage} onSearch={setSearch} />
      <main>{renderPage()}</main>
    </>
  );
}
