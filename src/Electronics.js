import React, { useState } from 'react'
import Product from './Product'

function Electronics() {

    const [electronics, setElectronics] = useState([
        {
          image:"https://images-eu.ssl-images-amazon.com/images/I/51YTmlApiXL._SX300_SY300_QL70_FMwebp_.jpg",
          name:"RUDRA Electronic LCD Writing Tablet for Kids Writing Pad Board",
          price:"15690"
        },
        {
            image:"https://images-eu.ssl-images-amazon.com/images/I/41GhnsfgjQL._AC_SX184_.jpg",
            name:"Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage) - 6000mAh Battery |FHD+ Screen| 48MP Quad Camera | Alexa Hands-Free Capable",
            price:"10990"
          },
          {
            image:"https://m.media-amazon.com/images/I/71jP9Frsr6L._AC_UY218_.jpg",
            name:"Lenovo IdeaPad Slim 5 AMD Ryzen 5 5500U 15.6 (39.63cm) FHD IPS Thin & Light Laptop (8GB/512GB SSD/Windows 10/MS Office/Backlit Keyboard/Fingerprint Reader/Graphite Grey/1.66Kg), 82LN00GTIN",
            price:"57690"
          },
          {
            image:"https://m.media-amazon.com/images/I/817aVWYpblL._AC_UY218_.jpg",
            name:"Fujifilm Instax Mini 9 Instant Camera (Ice Blue)",
            price:"3690"
          },
    ])
    return (
        <div className="electronics">
            <div className="electronics__row">
                {
                    electronics.map(({image, name, price}) =>(
                                <Product image={image} name={name} price={price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Electronics
