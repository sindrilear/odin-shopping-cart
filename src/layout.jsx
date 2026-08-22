import { Outlet } from "react-router-dom";
import { StrictMode, useEffect, useState } from 'react'
import Header from "./header";

export default function Layout() {

  const [cart, setCart] = useState([]);
  
  return (
    <>
      <Header cart={cart}/>
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </>
  );
}