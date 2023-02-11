import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from './Data'
import {Stores} from '../Files/Storeinfo'
import StoreShow from './StoresCard'
export default function Store(){
    const storeList=Stores.map((i,ind)=>{
        return <StoreShow key={ind} image={i.images} name={i.name} address={i.address} mobile={i.mobile}/>
    })
    return (
        <>
        <h1 className="heading">Express in stores (Store Details)</h1>
        <hr/>
        <div className="all">
        <Carousel showDots={true} responsive={responsive}>
        {storeList}
      </Carousel>
      </div>
      <hr/>
        </>
    )
}