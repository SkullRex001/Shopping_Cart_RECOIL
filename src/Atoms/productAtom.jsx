import { atom, selector } from "recoil";

export const productAtom = atom({
    key : "productAtom",
    default : selector({
        key : "productSelector",
        get : async ()=>{
            const Res = await fetch('https://fakestoreapi.com/products')
            const Product = await Res.json()
            return Product;
        }
    })
})