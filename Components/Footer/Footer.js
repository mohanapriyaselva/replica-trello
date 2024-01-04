import  React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';



export function Footer(){
    return(
        <>
        <div className="text-center d-flex flex-column justify-content-center align-items-center col-12">
                        <h4 className='col-8'>Join over 2,000,000 teams worldwide that are using Trello to get more done.</h4>
                        <img src={require('../Footer/Brand.PNG')} className='col-6'  alt="carasol-1"/>
          </div>

 {/* ================================Footer's First Half======================================== */}

          <div id="Footerfirsthalf" className='d-flex flex-column justify-content-center align-items-center col-12'>
                        <div><h1 className='text-light'>Get Started with Trello today</h1></div>
                       <div className=' d-flex  gap-3 '> 
                        <div><input type="text" placeholder='Email' className=' p-2 rounded '></input></div>
                        <div><input type="button" value="Sign up-it's free!" className='btn btn-primary p-2 rounded'></input></div>
                        </div>
          </div>



 {/* ===============================Footer's Second Half========================================= */}
     <div id="Footersecondhalf" className="text-center">

             {/* ==========================================================================================             */}
          <div className="d-lg-flex text-light justify-content-lg-around ">
                        <div><img src={require('../Footer/logo.PNG')}></img><Link to={"/"}><h6 className='text-light'>Log In</h6></Link></div>
                        <Link to="/FooterAbout"><div id="about" className='pt-4 p-2'><button className='btn text-light'><h2>About Trello</h2><p>What's behind the boards</p></button></div></Link>
                        <Link to="/FooterJob"><div id="about" className='pt-4 p-2'><button className='btn text-light'><h2>Jobs</h2><p>Learn about open roles on the <br/>Trello team</p></button></div></Link>
                        <Link to="/FooterAPP"><div id="about" className='pt-4 '><button className='btn text-light'><h2>Apps</h2><p>Download the Trello App for your <br/>Desktop or Mobile devices</p></button></div></Link>
                        <Link to="/Contactus"><div id="about" className='pt-4 p-2'><button className='btn text-light'><h2>Contact us</h2><p>Need anything?Get in touch and <br/>we can help</p></button></div></Link>
            </div>


       {/* ============================================================================================= */}
          <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
       {/* ============================================================================================= */}
          <div className='d-lg-flex justify-content-lg-evenly text-start  p-1   '>
          <div className='d-lg-flex text-light gap-5 p-2 '>
                {/* <div><FontAwesomeIcon icon={faGlobe} flip /> English <select><option></option><option>Tamil</option><option>English</option></select></div>   */}
                <Link to="/PrivacyPolicy"> <div><button className='btn text-light'>Privacy Policy</button></div></Link>
                <div>Terms</div>
                <div>Copyright&copy;2023 Atlassian</div>
          </div>
          
        
          <div className='d-lg-flex gap-5  d-flex justify-content-center p-2'>  
                          <div className='fs-1' id="instaicon"><a href="https://www.instagram.com/trelloapp/" className='text-white'><FontAwesomeIcon icon={faInstagram}  /></a><h6 id="instatxt" className='bg-dark text-light p-2'>Instagram</h6></div>
                         <div className='fs-1 text-white' id="faceicon"><a href="https://www.facebook.com/trelloapp/" className='text-white'><FontAwesomeIcon icon={faFacebook}  /></a><h6 id="facetxt" className='bg-dark text-light p-2'>Facebook</h6></div>
                        <div className='fs-1 text-white' id="linkicon"><a href="https://www.linkedin.com/company/trello/" className='text-white'><FontAwesomeIcon icon={faLinkedin}  /></a><h6 id="linktxt" className='bg-dark text-light p-2'>linkedin</h6></div>
                         <div className='fs-1 text-white' id="twiticon"><a href="https://twitter.com/trello" className='text-white'><FontAwesomeIcon icon={faTwitter}  /></a><h6 id='twitxt' className='bg-dark text-light p-2'> Twitter</h6></div>
                         <div className='fs-1 text-white' id="youicon"><a href="https://www.youtube.com/channel/UCRcOkXoOrU6sN1yCz20VmQw" className='text-white'><FontAwesomeIcon icon={faYoutube}  /></a><h6 id="youtxt"className='bg-dark text-light p-2'>Youtube</h6></div>
          </div>
          </div>
{/* ================================================================================================= */}
    </div>
          
        </>
    );
}
