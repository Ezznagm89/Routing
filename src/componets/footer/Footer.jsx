import React from "react";

export default function Footer() {
  return (
    <div className="h-[370px] bg-[#2C3E50] ">
      <div className="container h-[300px] bg-[#2C3E50] ">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center  ">
          <div className="col p-[50px] ">
            <div className="card bg-transparent border-0 text-white  ">
              <div className="card-body ">
                <h3 className="card-title">LOCATION</h3>
                <p className="card-text">2215 John Daniel Drive</p>
                <p className="card-text">Clark, MO 65243</p>
              </div>
            </div>
          </div>
          <div className="col p-[50px]">
            <div className="card bg-transparent border-0 text-white gap-y-14 ">
              <div className="card-body">
                <h3 className="card-title">AROUND THE WEB</h3>
                <div _ngcontent-hhj-c21="" className="icons">
                  <i
                    _ngcontent-hhj-c21=""
                    className="fa-brands fa-facebook mx-1 icon border border-white rounded-full p-[10px] text-white"
                  ></i>
                  <i
                    _ngcontent-hhj-c21=""
                    className="fa-brands fa-twitter mx-1  border border-white rounded-full p-[10px] text-white"
                  ></i>
                  <i
                    _ngcontent-hhj-c21=""
                    className="fa-brands fa-linkedin-in mx-1  border border-white rounded-full p-[10px] text-white"
                  ></i>
                  <i
                    _ngcontent-hhj-c21=""
                    className="fa-solid fa-globe mx-1  border border-white rounded-full p-[10px] text-white"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-[50px]">
            <div className="card bg-transparent border-0 text-white">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                Freelance is a free to use, licensed Bootstrap theme created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A252F] text-center text-white h-[70px] ">
          <p className="p-4">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
