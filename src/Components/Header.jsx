import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Header.css'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../Atoms/cartAtom'

const Header = () => {
    const CartLength = useRecoilValue(cartAtom)
  return (
    <div className='Header'>
        <p>E-Shop</p>
        <div className='Links'>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
        </div>
        <p>Cart Item : {CartLength.length}</p>
    </div>
  )
}

export default Header