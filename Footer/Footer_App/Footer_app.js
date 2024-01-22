import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple,faGooglePlay,faWindows } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import '../Footer_App/FooterApp.css'
export function Footer_App(){
return(
    <>
    <h1 className="text-center">Trello works seamlessly wherever you are.</h1>
{/* //============================================================================== */}
    <div className="d-lg-flex justify-content-lg-evenly align-items-lg-center text-center lh-lg footerAppTOP ">
    <div>
    <img src={require('../Footer_App/web.PNG')}/>
        <h2>Web</h2>
        <div ><button className="rounded p-3 bg-light">Trello.com<span className="w-100">&rarr;</span></button></div>
    </div>

    <div>
    <img src={require('../Footer_App/Mobile.PNG')}/>
        <h2>Mobile</h2>
        <div className="d-flex flex-column gap-4">
       <Link to="https://apps.apple.com/us/app/trello-organize-anything/id461504587"><button className="rounded bg-dark text-light"><div className="float-start" icon="playstoreicon"><FontAwesomeIcon icon={faApple} /></div><h6>Download</h6><h3>App store</h3></button></Link> 
        <Link to="https://play.google.com/store/apps/details?id=com.trello&pli=1"><button className="rounded bg-dark text-light"><div className="float-start"><FontAwesomeIcon icon={faGooglePlay} /></div><h6>GET IT ON</h6><h3>Google Play</h3></button></Link>
        </div>
    </div>

    <div>
        <img src={require('../Footer_App/Desktop.PNG')}></img>
        <h1>Desktop</h1>
        <div className="d-flex flex-column gap-4 ">
        <Link to="https://apps.apple.com/us/app/trello/id1278508951?mt=12?ls=1&mt=12"><button className="rounded bg-dark text-light"><div className="float-start"><FontAwesomeIcon icon={faApple} /></div><h6>Download</h6><h3>App Store</h3></button></Link>
        <Link to="https://apps.microsoft.com/detail/9NBLGGH4XXVW?rtc=1&hl=en-us&gl=US#activetab=pivot:overviewtab"><button className="rounded bg-dark text-light"><div className="float-start"><FontAwesomeIcon icon={faWindows} /></div><h6>Get it from</h6><h3>Microsoft</h3></button></Link>
        </div>
    </div>

    </div>
{/* //============================================================================= */}
    <h1 className="text-center">Trello is supported in these modern browsers.</h1>
 {/* //============================================================================= */}
    
     <div className="d-lg-flex justify-content-lg-evenly text-center  align-items-lg-center footerAppBottom m-5">

     <div><img src={require('../Footer_App/Chrome.PNG')}></img><h1>Chrome</h1><h6>latest</h6><button>Download</button></div>
     <div><img src={require('../Footer_App/Fire.PNG')}></img><h1>Firefox</h1><h6>latest</h6><button>Download</button></div>
     <div><img src={require('../Footer_App/Edge.PNG')}></img><h1>Edge</h1><h6>latest</h6><button>Download</button></div>
     <div><img src={require('../Footer_App/Safari.PNG')}></img><h1>Safari</h1><h6>latest</h6><button>Download</button></div>
     </div>
    </>
);
}