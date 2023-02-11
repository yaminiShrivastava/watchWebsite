 import React, { useEffect, useState } from 'react'
 import './Carousel.css'
 export default function Carousel({Images}){
    const [current,setcurrent]=useState(0)
    const [autoplay,setautoplay]=useState(true)
    let timeout=null
    useEffect(()=>{
        timeout=autoplay&& setTimeout(incr, 2500);
    })
    
    const incr=()=>{
        if(current===Images.length-1)setcurrent(0);
        else setcurrent(current+1)
    }
    return (
        <div className='Carousel'>
            <div className='carousel_wrapper' onMouseEnter={()=>{setautoplay(false);clearTimeout(timeout)}} onMouseLeave={()=>setautoplay(true)}>
                {
                Images.map((i,ind)=>{
                return <div key={ind} className={ind===current?"carousel_card carousel_card_active":"carousel_card"}><img src={i.images} alt=""></img></div>
                })}
                
            </div>
            <div className='carousel_pagination'>
                {Images.map((_,ind)=>{
                    return(
                        <div key={ind} className={ind===current?"pagination_dot pagination_dot_active":"pagination_dot"} onClick={()=>{setcurrent(ind)}}></div>
                    )
                })}
            </div>
        

        </div>
    )
}