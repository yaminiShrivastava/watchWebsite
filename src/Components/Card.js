import "./Card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { useState } from "react";
import {productDataHer} from '../Files/her'
import {productDataHim} from '../Files/him'
import {responsive} from './Data'
export default function Card() {
    const [men,setmen]=useState(true)
    
      
     
    const productM = productDataHim.map((item) => (
    <Product
      name={item.name}
      image={item.image}
      price={item.price}
    />
    ));
    const productW = productDataHer.map((item,ind) => (
        <Product key={ind} name={item.name} image={item.image} price={item.price}/>
    ));

  return (
    <div className="App">
        <h1 className="heading">Most Loved This Week</h1>
        <div className="des">
            <h2 className={men===true?"men collection active":"men collection"} onClick={()=>{setmen(true)
            }}>Men</h2>
            <h2 className={men===false?"women collection active":"women collection"} onClick={()=>{setmen(false)
            }}>Women</h2>
      </div>
      
      <Carousel showDots={true} responsive={responsive}>
        {men===true?productW:productM}
      </Carousel>

    </div>
  );
}