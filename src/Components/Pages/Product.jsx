import React from 'react'
import all_product from './../../assets/all_product';
import BreadCurm from '../BreadCurms/BreadCurm';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

function Product() {
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div className='product'>
      <BreadCurm product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product