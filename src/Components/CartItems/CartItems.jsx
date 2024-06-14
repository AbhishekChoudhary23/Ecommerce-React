import React, { useContext } from "react";
import "./CartItems.css";
import all_product from "../../assets/all_product";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

function CartItems() {
  const { cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="cartIcon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className="cartIcon-removeIcon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItemsCount">
        <div className="cartItemsTotal">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItemsTotalItems">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItemsTotalItems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItemsPromoCode">
          <p>If You Have a Promo Code, Enter it Here</p>
          <div className="cartItemsPromoBox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
