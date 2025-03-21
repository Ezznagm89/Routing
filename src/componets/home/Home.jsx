import "./Home.css";
import { Helmet } from 'react-helmet';
import imge from './../../assets/avataaars.svg'
export default function Home() {
  return (
    <div>
        <Helmet>
        <title>Home</title>
      </Helmet>
    <div className="flex flex-col items-center justify-center w-auto p-4 text-center h-[600px] ">

    <div className="">
  <img src={imge} alt="boy" className="w-full h-full " />
</div>


  <h2 className="text-[40px] font-[700] text-white mt-4">
    START FRAMEWORK
  </h2>

 <h2><i _ngcontent-hhj-c6="" class="fa-solid fa-star text-white relative right-line left-line "></i></h2> 

  <p className="mt-2 text-white ">Graphic Artist - Web Designer - Illustrator</p>

</div>

    </div>
  );
}

// export default Home;
