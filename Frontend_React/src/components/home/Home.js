import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Styles from './Styles';
function Home() {
  return (
    <div>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="FirstImage"
          alt="First slide"
        />
        <div className='info'>
          <h3>FirstReview<br/> &#9733;&#9733;&#9733;&#9733;&#9733;
</h3>
          <p>Name</p>
        </div >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="SecondImage"
          alt="Second slide"
        />

        <div className='info'>
        <h3>SecondReview
        <br/> &#9733;&#9733;&#9733;&#9733;&#9733;
        </h3>
          <p>Name</p>
        </div >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ThirdImage"
          alt="Third slide"
        />

        <div className='info'>
        <h3>ThirdReview
        <br/> &#9733;&#9733;&#9733;&#9733;&#9733;
        </h3>
          <p>Name</p>
        </div >
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;