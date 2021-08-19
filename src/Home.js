import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [deal, setDeal] = useState([
        {
            image:"https://m.media-amazon.com/images/I/41LRLdVQvBS._AC_SY200_.jpg",
            price:12000,
        },
        {
            image:"https://m.media-amazon.com/images/I/41ZP7W9lKOL._AC_SY200_.jpg",
            price:16999,
        },
        {
            image:"https://m.media-amazon.com/images/I/41d+F5Bz6XS._AC_SY200_.jpg",
            price:1500,
        },
        {
            image:"https://m.media-amazon.com/images/I/41LwPLEfBfL._AC_SY200_.jpg",
            price:2000,
        },
        {
            image:"https://m.media-amazon.com/images/I/41Yyg9tYFNL._AC_SY200_.jpg",
            price:1000,
        },
        {
            image:"https://m.media-amazon.com/images/I/41IeAIhZt3S._AC_SY200_.jpg",
            price:17000,
        },
        {
            image:"https://m.media-amazon.com/images/I/31fns2rD86L._AC_SY200_.jpg",
            price:2156,
        },
        {
            image:"https://m.media-amazon.com/images/I/41yZx5To+lL._AC_SY200_.jpg",
            price:1099,
        },
    ])
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/I/61xe3tVXrqL._SX3000_.jpg" alt="banner"/>
            <div className="home__deal">
                {deal.map(({image, price}) =>(
                    <div className="deal">
                    <img src={image} />
                    <h4>₹ {price}</h4>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Home
