import img1 from './../../assets/Images/grocery-banner.png'
import img2 from './../../assets/Images/grocery-banner-2.jpeg'
import img3 from './../../assets/Images/slider-image-1.jpeg'
import img4 from './../../assets/Images/slider-image-2.jpeg'
import img5 from './../../assets/Images/slider-image-3.jpeg'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function MainSlider() {
  return (
    <div className='row flex justify-center pt-11'>

   <div className='w-[324px] '>

   <Slider {...settings}>
        <div>
        <img src={img5} className='w-full h-[450px]' alt="" />
        </div>
        <div>
        <img src={img4} className='w-full h-[450px]' alt="" />
        </div>
        <div>
        <img src={img3} className='w-full h-[450px]' alt="" />
        </div>
        </Slider>
   </div>

   <div className='w-[324px] '>
  <img src={img1} className='w-full h-[225px]' alt="" />
  <img src={img2} className='w-full h-[225px] ' alt="" />
   </div>
    </div>
  )
}
