import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from './Data'

import {Celebs} from '../Files/CelebrityInfo'
import CelebCard from './CelebrityCard'
export default function Celebrity(){
    const celebList=Celebs.map((i,ind)=>{
        return <CelebCard key={ind} image={i.images} name={i.name} model={i.model} />
    })
    return(
        
        <>
        <h1 className="heading">Shop the Celebrity Look</h1>
        <hr/>
        <div className="all">
        <Carousel showDots={true} responsive={responsive}>
        {celebList}
      </Carousel>
      </div>
      <hr/>
        
        </>
    )
}