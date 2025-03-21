import React from "react";
import port1 from "./../../assets/port1.png";
import port2 from "./../../assets/port2.png";
import port3 from "./../../assets/port3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center w-auto p-4  h-[830px] bg-white  ">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <h2 className="text-[40px] font-[700] text-[#2C3E50] mt-4">
        PORTFOLIO COMPONENT
      </h2>

      <h2>
        <i
          _ngcontent-hhj-c6=""
          className="fa-solid fa-star text-[#2C3E50] text-[16px] "
        ></i>
      </h2>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-3 g-4  ">
          <div className="col  ">
            <div className="card h-[235px] w-[400px] rounded-[50px] relative">
              <img src={port1} className="card-img-top w-full " alt="home" />
              <div className="overlay absolute h-[100%] w-[100%] bg-[#1abc9c] bg-opacity-0 flex items-center justify-center hover:opacity-bg-85 transition-all ">
                <p className="text-white text-lg">
                  <i
                   
                    class="text-white fa-solid fa-plus fa-6x"
                  ></i>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-[235px] w-[400px] ">
              <img src={port2} className="card-img-top " alt="cake" />
              <div className=""></div>
            </div>
          </div>
          <div className="col">
            <div className="card h-[235px] w-[400px]">
              <img src={port3} className="card-img-top" alt="..." />
              <div className=""></div>
            </div>
          </div>
          <div className="col">
            <div className="card h-[235px] w-[400px]">
              <img src={port1} className="card-img-top" alt="home" />
              <div className=""></div>
            </div>
          </div>
          <div className="col">
            <div className="card h-[235px] w-[400px]">
              <img src={port2} className="card-img-top" alt="cake" />
              <div className=""></div>
            </div>
          </div>
          <div className="col">
            <div className="card h-[235px] w-[400px]">
              <img src={port3} className="card-img-top" alt="home" />
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
