import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'

function BreadCurm({product}) {
  return (
    <div className='breadCrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCurm