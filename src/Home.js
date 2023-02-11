import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel';
import {Images} from './Files/CarouselImg'
import Card from './Components/Card';
import Celebrity from './Components/Celebrity';
import Store from './Components/Store';
import Footer from './Components/Footer';
import Himher from './Components/Himher';
function Home() {
  return (
    <>
    
    <Navbar/>
    <Carousel Images={Images}/>
    <div className='tagline'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
    <div className='options'>

    <button type="button" className="a btn btn-secondary btn-lg">pick up store</button>
    <button type="button" className="a btn btn-secondary btn-lg">Contact us</button>
    <button type="button" className="a btn btn-secondary btn-lg">Lorem Ipsum</button>
    <button type="button" className="a btn btn-secondary btn-lg">Abcd</button>
    </div>
    
    <Himher/>
    <Card/>
    <Celebrity/>
    <Store/>
    <Footer/>
    </>
  );
}

export default Home;
