import React from "react";
import '../Sectionseven/Sectionseven.css'
import { Link } from "react-router-dom";


export function Sectionseven(){
    return(
        <>

<div className="fs-1 float-end"><a href="#preview">&#8249;</a>&nbsp;&nbsp;<a href="#next">&#8250;</a></div>
 <div className="m-5">

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                           
                                <div className="d-lg-flex">  
                                <div className=" col-lg-7 p-5" id="card">
                                <h4>[Trello is] great for simplifying complex processes.As a manager,I can chunck[processess] down into bite-sized pieces for my team and then delegate that out,but still keep a bird's eye view.</h4>
                                
                               
                                
                                <div className="mt-5">
                                <hr></hr>
                                <h5>Joey Rosenberg</h5>
                                <h5>Global Leadership Director at Women Who code </h5>
                                <h6 className="mt-3">WomenWho</h6>
                                <h1>CODE<span className="fs-6">&reg;</span></h1>
                                </div>
                                <div className="float-end"><Link to={"https://blog.trello.com/women-who-code"}>Read the Story</Link></div>
        </div>

        <div className="col-lg-3 p-5 text-light" id="card2">
                <h4 className="fw-bold fs-2">75% of organizations report that Trello delivers values to thier business within 30 days.</h4>
              <div className="mt-5">
                <Link to={"https://www.techvalidate.com/product-research/trello/facts/1D4-3E6-170"} className="text-light">Trello TechValidate Survey</Link>
              </div>
                </div>
</div>
                        </div>
      </div>
      



    <div class="carousel-item" data-bs-interval="2000">
                                <div className="d-lg-flex">
                <div className="col-lg-7 p-5" id="card">


                                <h4>Whether someone is in the ofice,working from home, or working on site with a client,everyone can share context and information throught Trello</h4>
                                <div id="line">
                                <hr></hr>
                                <h5>Sumeet Moghe</h5>
                                <h5>Product Manager at ThoughtWorks</h5>
                                <h1>/thoughtworks</h1>
                                </div>
                                <div className="float-end"><Link to={"https://blog.trello.com/women-who-code"}>Read the story</Link></div>
                </div>

                <div className="col-lg-3 p-5 text-light" id="card2">
                                <h2 className="fw-bold fs-2">81% of customer chose Trello for its ease of use.</h2>
                                
                                <div id="link">
                                        <Link to={'https://www.techvalidate.com/product-research/trello/facts/1D4-3E6-170'} className="text-light ">Trello TechValidate Survey</Link>
                                </div>
                </div>
                </div>
    </div>



          <div class="carousel-item">
                                                <div className="d-lg-flex"> 
                        <div className="col-lg-7 p-5" id="card">
                                <h4>We used Trello to provide clarity on steps,requirements,and procedures.This was exceptional when communicating with teams that had deep cultural and language diferences.</h4>
                                <div id="line">
                                <hr></hr>
                                <h5>Jefferson Scomacao</h5>
                                <h5>Development Manager at IKEA/PTC</h5>
                                <img src={require('../Sectionseven/Logo.PNG')}></img>
                                </div>
                                <div className="float-end"><Link to={'https://blog.trello.com/women-who-code'}>Read the story</Link></div>
                        </div>
                        <div className="col-lg-3 p-5 text-light" id="card2">
                                        <h4 className="fw-bold fs-2">74% of Customer say Trello has improved communication with their co-workers and teams.</h4>
                                        <div className="mt-5"><Link to={"https://www.techvalidate.com/product-research/trello/facts/1D4-3E6-170"} className="text-light">Trello TechValidation Survey</Link></div>
                                </div>
</div>
 
          </div>

         </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
     </div>
 




{/* <div className="d-lg-flex">  
<div className=" col-lg-7 p-5" id="card">
                <h4>[Trello is] great for simplifying complex processes.As a manager,I can chunck[processess] down into bite-sized pieces for my team and then delegate that out,but still keep a bird's eye view.</h4>
                
                <br></br><br></br><br></br>
                <hr></hr>
                <h5>Joey Rosenberg</h5>
                <h5>Global Leadership Director at Women Who code </h5>
                <h6 className="mt-3">WomenWho</h6>
                <h1>CODE<span className="fs-6">&reg;</span></h1>
                <div className="float-end"><Link to={""}>Read the Story</Link></div>
        </div>

        <div className="col-lg-3 p-5 text-light" id="card2">
                <h4 className="fw-bold fs-2">75% of organizations report that Trello delivers values to thier business within 30 days.</h4>
              <div id="link">
                <Link to={""} className="text-light">Trello TechValidate Survey</Link>
              </div>
                </div>
</div> */}
{/* ================================================================ */}
{/* <div className="row" id="next">
      <div className="col-7 p-5" id="card">
                <h4>Whether someone is in the ofice,working from home, or working on site with a client,everyone can share context and information throught Trello</h4>
                <div id="line">
                <hr></hr>
                <h5>Sumeet Moghe</h5>
                <h5>Product Manager at ThoughtWorks</h5>
                <h1>/thoughtworks</h1>
                </div>
                <div className="float-end"><Link to={""}>Read the story</Link></div>
      </div>

      <div className="col-3 p-5 text-light" id="card2">
                <h2 className="fw-bold fs-2">81% of customer chose Trello for its ease of use.</h2>
                
                <div id="link">
                        <Link to={''} className="text-light ">Trello TechValidate Survey</Link>
                </div>
      </div>
</div> */}
{/* =============================================================== */}
{/* <div className="row" id="next"> 
       <div className="col-7 p-5" id="card">
                <h4>We used Trello to provide clarity on steps,requirements,and procedures.This was exceptional when communicating with teams that had deep cultural and language diferences.</h4>
                <div id="line">
                <hr></hr>
                <h5>Jefferson Scomacao</h5>
                <h5>Development Manager at IKEA/PTC</h5>
                <img src={require('../Sectionseven/Logo.PNG')}></img>
                </div>
                <div className="float-end"><Link to={''}>Read the story</Link></div>
       </div>
       <div className="col-3 p-5 text-light" id="card2">
                <h4 className="fw-bold fs-2">74% of Customer say Trello has improved communication with their co-workers and teams.</h4>
                <div className="mt-5"><Link to={""} className="text-light">Trello TechValidation Survey</Link></div>
        </div>
</div> */}
 
        </> 
    );
}