import  React from 'react'
import '../Footer/Footer.css'

export function Footer(){
    return(
        <>
          <h4 className='text-center'>Join over 2,000,000 teams worldwide that are using Trello to get more done.</h4>
          <img src={require('../Footer/Brand.PNG')} className='col-6'  alt="carasol-1"/>
          <div id="Footer" className='p-5'>
             <h1 className='text-light'>Get Started with Trello today</h1>
             <input type="text" placeholder='Email' className='p-1'></input>
             <input type="button" value="Sign up-it's free!" className='btn btn-primary'></input>
          </div>
          <div id="FooterBottom">
                
          </div>
        </>
    );
}
