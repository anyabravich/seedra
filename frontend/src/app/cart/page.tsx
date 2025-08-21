"use client";

import Checkout from "@/components/Checkout";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

const Cart = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("goods") || "[]");
    setGoods(data);
  }, []);

  return (
    <Container>
      <Checkout goods={goods} />
    </Container>
  );
};

export default Cart;
