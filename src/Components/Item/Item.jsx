import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item({image, name, new_price, old_price, id}) {
  return (
    <Link style={{textDecoration:'none'}} to={`/product/${id}`}>
    <div className='item' onClick={window.scrollTo(0,0)}>
        <img src={image} alt="" />
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${new_price}
            </div>
            <div className="item-price-old">
                ${old_price}
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item