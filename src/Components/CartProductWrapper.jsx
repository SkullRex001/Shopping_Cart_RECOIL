import React from 'react'
import './Css/ProductsWrapper.css'
const CartProductsWrapper = ({image , title , price}) => {

  return (
    <div className='ProductsWrapper'>
        <img src={image} alt="ProdImage" />
        <p>{title}</p>
        <p>${price}</p>
    </div>
  )
}

export default CartProductsWrapper