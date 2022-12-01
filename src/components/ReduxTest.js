import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/apiCalls.js";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slice/counterSlice.js";

export function ReduxTest() {
  const count = useSelector((state) => state.counter.value);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(dispatch));
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        {/* <span>{name}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Dec
        </button>
        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(listProducts(dispatch))}
        >
          update
        </button> */}
      </div>
    </div>
  );
}
