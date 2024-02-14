import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../Atoms/cartAtom'
import './Css/ProductsWrapper.css'
import CartProductsWrapper from './CartProductWrapper'
import Footer from './Footer'
const Cart = () => {
    const Cart = useRecoilValue(cartAtom)
    console.log(Cart)
    return (
        <>

            <div className='HomeProduct'>
                {
                    Cart.map((items, index) => {
                        return <CartProductsWrapper image={items.image} title={items.title} price={items.price} key={index} />
                    })
                }
            </div>
            <Footer />

        </>

    )
}

export default Cart