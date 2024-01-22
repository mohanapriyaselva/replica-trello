import React from "react";
import '../Footer_About/Footerabout.css';
import { Link } from "react-router-dom";
export function Footer_About(){
    return(
        <>
        <div className="bg-primary text-light text-center p-5">
        <h1>About Trello</h1>
        <h5>What’s behind the boards.</h5>
        </div>

        <div className="border footerabout p-5 text-center">
            <h1>The way your team works is unique — so is Trello.</h1>
            <article className="fs-4 p-5 ">Trello is the flexible work management tool where teams can ideate plans, collaborate on projects, organize workflows, and track progress in a visual, productive, and rewarding way. From brainstorm to planning to execution, Trello manages the big milestones and the day-to-day tasks of working together and getting things done.</article>
            <button className="border-primary bg-light text-dark p-2">Download the Brand Assests(ZIP)</button>
        </div>

            <div className="fs-4 m-5 p-5">
                <h1 className="text-center">A brief history of Trello</h1>
                
                    
                      <li>Around the summer of 2010, <a href="https://www.fogcreek.com/?fccmp=trello_about">Fog Creek Software</a> starts doing regular Creek Weeks, internal explorations for potential products. In January 2011, a prototype that hopes to solve some high-level planning issues is pitched. It’s called Trellis. Full time development begins soon after.</li>
                      <li>After a closed beta, Trello launches at TechCrunch Disrupt in September of 2011 with apps for the web and iPhone. We narrowly avoid names like Cardvark and Planatee and go with the name Trello.</li>
                      <li>In the summer of 2012, Fog Creek co-founder Joel Spolsky’s dog Taco becomes the official Trello spokes-husky. Trello reaches 500,000 members and launches the Trello Android app.</li>
                      <li>Bug fixes and performance improvements.</li>
                      <li>n July 2014, Trello spins off from Fog Creek and becomes Trello, Inc. naming Fog Creek co-founder Michael Pryor as its CEO. The company raises $10.3 million in a Series A round of funding led by <a href="https://www.sparkcapital.com/">Spark Capital</a> and <a href="https://www.indexventures.com/">Index Ventures</a>. Trello has over 4.75 million users.</li>
                      <li>In May 2015, Trello goes international, with localized experiences for Brazil, Germany, and Spain.</li>
                      <li>In early 2017, Trello is <a href="https://blog.trello.com/trello-atlassian">acquired by Atlassian</a> and begins the next chapter in empowering teams everywhere.</li>
                      <li><Link to="/FooterJob"> Help us add more things to this list.</Link></li>
            
            </div>

            <div className=" footerabouticons text-center m-1 p-5">
                <div className="d-flex flex-column gap-3">
                <h4 className="text-center text-light p-5 ">Millions of people and companies of all kinds and sizes love using Trello.</h4>
                <div className=""><img src={require('../Footer_About/cross.PNG')} className="col-3"></img>
                <img src={require('../Footer_About/JOhn.PNG')} className="col-2"></img>
                <img src={require('../Footer_About/Grand.PNG')} className="col-5"></img></div>
                <div><img src={require('../Footer_About/Google.PNG')}className="col-3"></img>
                <img src={require('../Footer_About/visa.PNG')} className="col-2"></img>
                <img src={require('../Footer_About/zoom.PNG')} className="col-3"></img></div>
                </div>
            </div>


            <div className="mt-5 text-center">
                <h1 className="text-center">Trello in the Press</h1>
                <article className="fs-4 p-5 m-5">“Trello is an online tool for managing projects and personal tasks. That may sound rather prosaic. But this increasingly popular app often inspires the sort of passion usually reserved for consumer apps like Pinterest or Instagram. It’s the kind of business software that slips into businesses through the backdoor, just because individual employees like how it works.”</article>
                <img src={require('../Footer_About/wired.PNG')} className=""></img>  
            </div>

            <div className="mt-5 text-center">
                <article className="fs-4 p-5 m-5">“It reminds us of the early traction that Dropbox…and other apps up there had that have grabbed individuals and caused them to start using it and bring it to work and convince teams and colleagues to use it and it’s gradually taken over organizations,” said Index Partner Neil Rimer.</article>
                <img className="w-75"src={require('../Footer_About/Wallofact.PNG')}></img>
            </div>

            <div className="mt-5 text-center">
                <article className="fs-4 p-5 m-5">“The visual organizing software has amassed some 4.6 million registered users — now with one million monthly actives — turning their projects, whether household to-do lists or corporate realignment plans, into visual boards using its cloud-based software.”</article>
                <img className="w-50" src={require('../Footer_About/Tech.PNG')}></img>
            </div>

            <div className="mt-5 text-center">
            <article className="fs-4 p-5 m-5">“I’ve been using it for five months now without fail, synthesizing everything from Covey and Allen that stuck, along with Carson and Babauta’s wisdom, to create the only task management system that’s ever really worked for me.”</article>
            <img src={require('../Footer_About/forbos.PNG')}></img>
            </div>

            <div className="footeraboutbottom text-center">
                <div className="m-5 p-5">
                <h4>Looking for logos, screenshots, branding guidelines, Taco pics, and other Trello assets? Check out the <a href="https://atlassian.design/">branding page.</a></h4>
                <h4>Media inquiries? Talk to us at <a href="">press@atlassian.com</a>.</h4>
                <h4>Marketing or content inquiries? Reach us at <a href="">editor@trello.com</a>.</h4>
            </div>
            </div>




        </>
    );
}