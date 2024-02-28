import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h3> Subtotal: ${totalAmount} </h3>
          <button onClick={() => navigate("/ChrisDev-Store")}> <h3>Add Items</h3> </button>
          <button onClick={() => navigate("/ChrisDev-Store")}> <h3>Continue Shopping</h3> </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            <h3>Checkout</h3>{" "}
          </button>
        </div>
      ) : (
        <h2 className="emptycart"> Your Shopping Cart is Empty</h2>
      )}
    </div>
  );
};