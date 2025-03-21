import { Helmet } from 'react-helmet';
function About() {
  return (
    <div>
      <Helmet>
        <title>ِAbout</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center w-auto p-4  h-[600px] ">
        <h2 className="text-[40px] font-[700] text-white mt-4">
          ABOUT COMPONENT
        </h2>

        <h2><i _ngcontent-hhj-c6="" className="fa-solid fa-star text-white text-[16px] "></i></h2> 


        <div class="container text-white">
          <div class="row px-5">
            <div class="col-md-6 ps-md-5">
              <p>
               
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div class="col-md-6 pe-5">
              <p>
               
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
