import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Drower from "./components/Drower";
import Products from "./components/Products";
import {show, hide}  from './store/features/productsSlice'
import Buttons from './components/Buttons'
import Counter from './components/Counter'

const App = () => {
  const dispatch = useDispatch()

  const productNumber = useSelector((state) => state.productStore);
  const showCart = () => {
    dispatch(show())
  }


  return (
    <div className="dashboard">

      <div className="panel">
      <h1>hello world</h1>
          <Counter />
          <Buttons />
        <ul>
          <li>cart</li>
          <li>product number: {productNumber.products.length}</li>
          <li>products</li>
          <li onClick={showCart}>open cart</li>
        </ul>
      </div>
      <div className="container">
        <Products />
      </div>
      <Drower />
    </div>
  );
};

export default App;
