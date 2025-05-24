

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Cards from "../component/Cards";

export default function Freebook() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => {
        const freeItems = data.filter((item) => item.category.toLowerCase() === "free");
        setFilterData(freeItems);
      });
  }, []);

  const settings = { 
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel,
          ipsum dolor aperiam alias nihil deleniti architecto dolores porro
          consequatur molestiae vero nulla accusamus, vitae quaerat labore
          voluptatibus. Voluptatem, accusamus?
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
