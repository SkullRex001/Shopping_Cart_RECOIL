import React from 'react'
import './Css/ProductsWrapper.css'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { productAtom } from '../Atoms/productAtom'
import { cartAtom } from '../Atoms/cartAtom'

const ProductsWrapper = ({image , title , price , id}) => {

    const setCartState = useSetRecoilState(cartAtom)
    const Products = useRecoilValue(productAtom)
    function addToCart(Index) {
        setCartState((prev)=>{
            return [...prev , Products[Index]]
        })
    }

  return (
    <div className='ProductsWrapper'>
        <img src={image} alt="ProdImage" />
        <p>{title}</p>
        <p>${price}</p>
        <button onClick={()=>{
            return addToCart(id)
        }}>Add To Cart</button>
    </div>
  )
}

export default ProductsWrapper