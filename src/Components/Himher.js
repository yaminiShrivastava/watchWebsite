import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from './Data'
import Acard from './HimHerCard'

export default function Himher(){
    return (
        <>
<hr/>
<Carousel showDots={true} responsive={responsive}>
        <Acard image="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2015/10/5-must-have-mens-watches-part-I-side-12.jpg" gender=" Him"/>
        
        <Acard image="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwb21acab4/2023/SP23/set_01162023_global/wdp/0116_VDay_WDP_Watches.jpg" gender=" Her"/>
        
      </Carousel>
        <hr/>
        </>
    )
}