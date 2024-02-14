import React from 'react'
import ProductsWrapper from './ProductsWrapper'
import { useRecoilValue } from 'recoil'
import { productAtom } from '../Atoms/productAtom'
import './Css/ProductsWrapper.css'


const Home = () => {
    const Product = useRecoilValue(productAtom)
  return (
    <>
    <div className='HomeProduct'>
        {Product.map((items , index)=>{
            return <ProductsWrapper image={items.image} price={items.price} title={items.title} key={index} id={index}/>
        })}
    </div>
    </>

  )
}

export default Home