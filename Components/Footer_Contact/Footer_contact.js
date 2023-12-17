import React from "react";
import '../Footer_Contact/Footercontact.css';

export function Footer_Contact(){
    return(
        <>
              
        <div className="d-flex justify-content-center align-items-center align-self-center bg-primary" id="footercontactus">
                    <h1>Get help with Trello</h1>
        </div>

        <div className=" text-center p-5 m-5 ">
                <h2>Check our help site</h2>
                <h3 className="fw-normal">Get an answer faster! There’s a good chance your question has been answered in one of our help articles.</h3>
                <button className="rounded p-3 border-primary bg-light">Visit help site</button>
        </div>

        <div className="text-center p-5 m-5">
        <h1>Is Trello down?</h1>
        <h4 className="fw-normal">Rarely, Trello will be down for maintenance or due to an unexpected error. If something isn’t working, check to see if it’s down.</h4>
        <button className="bg-success text-white fs-4 border-0 rounded px-3 p-3">All Systems Operational</button>
        </div>

        <div className="text-center">
            <h1>Ask the Trello community</h1>
            <h4 className="fw-normal">Get quick answers, how-to’s, and advice from fellow Trello users and experts.</h4>
            <button className="bg-light rounded p-3 px-4 border-primary">Go to Community</button>
        </div>

        <div  className="text-center p-5 m-5">
            <h1>Contact support</h1>
            <h4 className="fw-normal">For specific account or billing questions, security concerns, or answers not available on our help site, we’re happy to help.</h4>
        </div>

        <div className="d-flex justify-content-center">
                <div className="border p-5 m-5 rounded footercontactbottombackground d-inline-block ">
                    <h1>Log into your account</h1>
                    <h6>If you can, log into your account before you contact support.</h6><h6>Logging in makes it easier for our team to respond.</h6>
                    <div className="d-flex gap-4">
                    <div><button className="bg-primary rounded border-0 px-3 py-1 text-light fw-bold">Login</button></div>
                    <div><button className="border-0 p-2 footercontactbottombackground">Continue without logging in</button></div></div>
                </div>
        </div>

        </>
    );
}