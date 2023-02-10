import React from 'react'
import ProductCard from '../product-card/product-card'
import data from "./data.json"
import "./product-list.scss"

const ProductList = () => {
  return (
    <div className='product-list'>
        {data.map(product=> <ProductCard {...product} />)}
       
    </div>
  )
}

export default ProductList