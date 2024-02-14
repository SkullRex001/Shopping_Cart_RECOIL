import React from 'react'
import './Css/Footer.css'
import { useRecoilValue } from 'recoil'
import { totalPrice } from '../Atoms/cartAtom'

const Footer = () => {
    const Price = useRecoilValue(totalPrice)

  return (
    <div className='Footer'>
        <p>Total Price :- ${Price}</p>
    </div>
  )
}

export default Footer