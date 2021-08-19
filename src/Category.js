import React, { useState } from 'react'
import './Category.css'
import {Link} from 'react-router-dom'

function Category() {
    const [categories, setCategories] = useState([
        {
            image:"https://www.siliconindia.com/news/newsimages/Webp.net-resizeimage%20(18).jpg",
            name:"Electronics",
            path:"/electronics"
        },
        {
            image:"https://i.pinimg.com/originals/87/9e/d3/879ed3b30ae4c9e1161ea37ff6255af4.jpg",
            name:"Home Appliances",
            path:"/appliance"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcF1PxC7pIrTJS8BwZ_pB0PmYyjut1oiJxZA&usqp=CAU",
            name:"Grocery",
            path:"/grocery"
        },
        {
            image:"https://5.imimg.com/data5/LJ/RP/MY-4878239/stationery-500x500.png",
            name:"Stationery",
            path:"/stationery"
        },
        {
            image:"https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Men-Cadet-Walnut-1_800x533_crop_right.jpg?v=1602279309",
            name:"Men's Fashion",
            path:"/mens"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h86r31BQltPEdckWjXUs5C86FwHTUdvVkA&usqp=CAU",
            name:"Women's Fashion",
            path:"/womens"
        },
    

    ])

    return (
        <div className="category">
            <div className="category__cards">
            {
                categories.map(({image, name,path})=>(
                    <div className="category__card">
                        <Link to={`/category${path}`}>
                            <img src={image} />
                            <h4>{name}</h4>
                        </Link>
            </div>
                ))
            }
            </div>
            
        </div>
    )
}

export default Category
