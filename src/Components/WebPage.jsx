import React from 'react'
import Home from './Home'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './Header'
import Cart from './Cart'


const WebPage = () => {
  return (
    <div>
        <RecoilRoot>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element = {<Home/>} />
                <Route path='/cart' element = {<Cart/>}/>
            </Routes>
            
            </BrowserRouter>

        </RecoilRoot>
    </div>
  )
}

export default WebPage