import React from "react";
import '../Footer_Job/Footerjob.css';
export function Footer_job(){
    return(
        <>
        <div className="d-flex gap-1 m-5"><h5>Company</h5>/<h5>Carrers</h5>/<h5>Trello</h5></div>

          <div className="text-center">
                    <h1>Trello jobs</h1>
                    <h4>Learn about roles on the Trello team</h4>
                    <button className="bg-primary rounded p-2 text-light fw-bold ">Browse Trello jobs</button>
        </div>
        <div><hr></hr> </div>

        <div className="text-center p-4">  
        <img className="col-9"src={require('../Footer_Job/job.jpg')}></img>
        </div>

        <div className="d-lg-flex px-5 justify-items-center">
                      <div>
                 <img src={require('../Footer_Job/icon.PNG')}></img>
                 </div>
           <div className="px-5">
           <h2>Bulid with perpective</h2>
           <article>Now part of the Atlassian family, Team Trello is headquartered in New York City and distributed all over the world. We embrace a remote-working culture that has helped us to build an amazing product that fits the needs of modern knowledge workers, super-organized parents, and efficient project planners alike.<br></br><br></br>
           Before joining Atlassian, Trello had already built a values-driven culture that remains alive and well today. Coupled with Atlassian, there are even more opportunities to make a lasting global impact as part of this growing team.
           </article>

            <button className="bg-primary text-light fw-bold p-2 rounded mt-5">Browse Trello jobs</button>
          
           </div>
        </div>


       <div className="border footerjob p-3 m-5">
               <p>“We envision a world where hundreds of millions of people collaborate in teams—however they like—with their imaginations being the only constraint for what they can accomplish.”</p>

               <h6>— Michael Pryor<br></br>
                        Head of Trello</h6>
       </div>
       
            
        </>
    );
}