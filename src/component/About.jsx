import React from 'react';

import LandingHeader from './LandingHeader'; 
import LandingFooter from './LandingFooter'; 
import girl from "../assets/img/laptopgirl.png"
const About = () => {
  return (
    <div>
      <LandingHeader />

      <div className="container bg-white mb-10"> 
        <h3 className="text-center mb-5 mt-5">About</h3> 
        <div className="row text-center mb-4 justify-content-between">
          <div className="col-md-6 text-start"> 
            <h3>Lorem Ipsum is simply dummy text <br />of the printing</h3>
          </div>
          <div className="col-md-6 "> 
            <img src={girl} alt="People working" style={{height:"200px"}}/>
            
          </div>
        </div>

        <div className="row text-center justify-content-between ">
          <div className='col-md-6 mb-3 text-start'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker 
              including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-2 mb-3"> {/* Changed col-md-2 to col-md-3 */}
            <div className="border p-3 bg-body mb-3">
              <div className="display-6">3.5</div>
              <div>Lorem Ipsum</div>
            </div>
       
            <div className="border p-3 bg-body ">
              <div className="display-6">23</div>
              <div>Lorem Ipsum</div>
            </div>
          </div>
          <div className="col-md-2 mb-3"> {/* Changed col-md-2 to col-md-3 */}
            <div className="border p-3 bg-body mb-3">
              <div className="display-6">830+</div>
              <div>Lorem Ipsum</div>
            </div>
          
         
            <div className="border p-3 bg-body">
              <div className="display-6">100K</div>
              <div>Lorem Ipsum</div>
            </div>
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
};

export default About;
