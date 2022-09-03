import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {show, hide} from '../store/features/productsSlice'

const Drower = () => {
    const show = useSelector((state) => state.productStore);
    const dispatch = useDispatch()
    const hideCart = () => {
        dispatch(hide())
    }


  return (
    <div className={`drower ${show.showCart ? 'active' : 'hide'}`}>
      <h1 onClick={hideCart} >close</h1>
    </div>
  );
};

export default Drower;
