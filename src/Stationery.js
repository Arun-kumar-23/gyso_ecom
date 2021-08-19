import React, { useState } from 'react'
import Product from './Product';

function Stationery() {

    const [stationery, setStationery] = useState([
        {
          image:"https://m.media-amazon.com/images/I/71jTn3ZWw1L._AC_UL320_.jpg",
          name:"Papergrid Notebook - Long Book (31 cm x 19 cm), Single Line, 160 Pages, Soft Cover - Pack of 6",
          price:"360"
        },
        {
            image:"https://m.media-amazon.com/images/I/71IbIT00cOL._AC_UL320_.jpg",
            name:"NBA Team Color Retractable Click Pens- 5 Pack",
            price:"70"
          },
          {
            image:"https://m.media-amazon.com/images/I/61yhe8BlE+L._AC_UL320_.jpg",
            name:"Drazo 35 Liters Polyester Red Spacious School Bag.",
            price:"400"
          },
          {
            image:"https://m.media-amazon.com/images/I/71frknp-CWL._AC_UL320_.jpg   ",
            name:"World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set Paperback – 1 August 2019",
            price:"1190"
          },
    ])
    return (
        <div >
            <div >
                {
                    stationery.map(({image, name, price}) =>(
                                <Product image={image} name={name} price={price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Stationery
