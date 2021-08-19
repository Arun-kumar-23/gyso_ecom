import React, { useState } from 'react'
import Product from './Product';

function Mens() {

    const [mens, setMens] = useState([
        {
          image:"https://m.media-amazon.com/images/I/91JhmB1FZbL._AC_UL320_.jpg",
          name:"Easies by Killer Men's Slim Shirt",
          price:"730"
        },
        {
            image:"https://m.media-amazon.com/images/I/61ldhELWDoL._AC_UL320_.jpg",
            name:"CBlue Men's Outdoor Quick Dry Lightweight Sports Shorts Zipper Pockets",
            price:"500"
          },
          {
            image:"https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL320_.jpg",
            name:"TIMEWEAR Analog Day Date Functioning Stainless Steel Chain Watch for Men",
            price:"4000"
          },
          {
            image:"https://m.media-amazon.com/images/I/71bARgtzVKL._AC_SR200,161_QL70_.jpg",
            name:"Flyer Men's Leather belt (Formal/Casual) (Colour -Brown/Tan) Buckle Adjustable Size Genuine Leather (BR1512) (Pack of 1)",
            price:"890"
          },
    ])
    return (
        <div >
            <div >
                {
                    mens.map(({image, name, price}) =>(
                                <Product image={image} name={name} price={price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Mens
