import React, { useState } from 'react'
import Product from './Product';

function Womens() {

    const [womens, setWomens] = useState([
        {
          image:"https://m.media-amazon.com/images/I/A1tFsM3g3vL._AC_SR200,161_QL70_.jpg",
          name:"MIMOSA Women's Kanchipuram Art Silk Saree With Blouse Piece (65-HLFWHITEMARUN_Off White)",
          price:"1800"
        },
        {
            image:"https://m.media-amazon.com/images/I/817iC5Eq49L._AC_UL320_.jpg",
            name:"SWISSTONE Analogue Women's Watch (Pink Dial SIlver Colored Strap)",
            price:"535"
          },
          {
            image:"https://m.media-amazon.com/images/I/61iKZtIs73L._AC_UL320_.jpg",
            name:"ASIAN Women's Running & Walking Shoe",
            price:"500"
          },
          {
            image:"https://m.media-amazon.com/images/I/91g6yhzdbBL._AC_UL320_.jpg",
            name:"Catwalk Women's Glitter Front Platform Heels",
            price:"890"
          },
    ])
    return (
        <div >
            <div >
                {
                    womens.map(({image, name, price}) =>(
                                <Product image={image} name={name} price={price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Womens
