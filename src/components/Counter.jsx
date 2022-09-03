import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counterStore);
  return <h1>{counter.counter}</h1>;
};

export default Counter;
