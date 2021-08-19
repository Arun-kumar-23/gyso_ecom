import React, { useState } from 'react'
import Product from './Product';

function Grocery() {

    const [grocery, setGrocery] = useState([
        {
          image:"https://m.media-amazon.com/images/I/61QKKsgtVqL._AC_UL320_.jpg",
          name:"Coca-Cola Soft Drink, 1.25L PET Bottle",
          price:"65"
        },
        {
            image:"https://m.media-amazon.com/images/I/51SW5iGfKpL._AC_UL320_.jpg",
            name:"Fortune Rice Bran Health Oil, Cooking Oil for Healthier Heart, 1l Pouch",
            price:"180"
          },
          {
            image:"https://m.media-amazon.com/images/I/61YEqO+JnSL._AC_UL320_.jpg",
            name:"Daawat Sehat Mini Mogra Basmati Rice, 5kg with Free Spoon",
            price:"300"
          },
          {
            image:"https://m.media-amazon.com/images/I/71EPUud1NNL._AC_UL320_.jpg",
            name:"Cadbury Perk Chocolate Home Treats, 175.5 gm Pack",
            price:"65"
          },
    ])
    return (
        <div >
            <div >
                {
                    grocery.map(({image, name, price}) =>(
                                <Product image={image} name={name} price={price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Grocery
