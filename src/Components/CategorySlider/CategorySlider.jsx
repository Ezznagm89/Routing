import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
};

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const res = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
      setCategories(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="my-10 mb-10 mt-20">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category._id} >
            <img src={category.image} className="h-[150px]" alt={category.name} />
            <h3 className="mx-3 font-semibold text-[28px]">{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}