import React from "react";
import errorImg from'../../assets/Images/error.svg'

export default function NotFound() {
  return (
    <div className="w-full flex justify-center h-full">
      <img src={errorImg}/>
    </div>
  );
}