import { atom, selector } from "recoil";


export const cartAtom = atom({
    key : "cartAtom",
    default : []

})

export const totalPrice = selector({
    key : "totalPrice",
    get : ({get})=>{
        const Cart = get(cartAtom)
        let Total = 0 
        Cart.forEach((item)=>{
            Total = Total + item.price
        })

        return Total;
    }
})