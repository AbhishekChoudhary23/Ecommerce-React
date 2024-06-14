import React from "react";
import "./CSS/ShopCategory.css";
import all_product from "./../../assets/all_product";
import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../Item/Item";

function ShopCategory({ category, banner }) {
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if ( category  === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
