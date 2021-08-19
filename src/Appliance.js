import React, { useState } from 'react'
import Product from './Product';

function Appliance() {

    const [appliance, setAppliance] = useState([
        {
          image:"https://m.media-amazon.com/images/I/81FyYXoQF-L._AC_UY218_.jpg",
          name:"Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver)",
          price:"13360"
        },
        {
            image:"https://m.media-amazon.com/images/I/51QmQjHQASL._AC_UY218_.jpg",
            name:"Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Diamond Drum)",
            price:"14470"
          },
          {
            image:"https://m.media-amazon.com/images/I/61Vnoy0m+QL._AC_UY218_.jpg",
            name:"Kehma Enterprise Air Portable 3 in 1 Conditioner Humidifier Purifier Mini Cooler Arctic Air Humidifier Purifier Mini Cooler, air Coolers for House, air Coolers for Home.",
            price:"1800"
          },
          {
            image:"https://m.media-amazon.com/images/I/81IYJG9LSgS._AC_UY218_.jpg",
            name:"Sony Bravia 80 cm (32 inches) HD Ready Smart Android LED TV KD-32W820 (Black) (2021 Model) | with Alexa Compatibility",
            price:"31190"
          },
    ])
    return (
        <div >
            <div >
                {
                    appliance.map(({image, name, price}) =>(
                                <Product image={image} name={name} price={price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Appliance
