import React from 'react'
import { Link } from 'react-router-dom';
export function NavBar(){
    return(
        <>
{/*       
        <Link to='/Section5'><button className='btn btn-primary '>Section5</button></Link>
        <Link to='/Footer'><button className='btn btn-secondary'>Footer</button></Link>
        <Link to='/FooterAbout'><button className='btn btn-warning'>FooterAbout</button></Link>
        <Link to='/FooterJob'><button className='btn btn-dark'>Footer-Job</button></Link>
        <Link to='/FooterAPP'><button className='btn btn-danger'>FooterAPP</button></Link>
        <Link to='/Contactus'><button className='btn btn-light'>Footer-Contact</button></Link>
        <Link to='/HomeFooter'><button className='btn btn-dark text-light'>Home-Footer</button></Link> */}
        

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <Link to='/Section5'><li><a class="dropdown-item" >Section-5</a></li></Link>
            <Link to='/HomeFooter'><li><a class="dropdown-item" >HomeFooter</a></li></Link>
            <Link to='/Footer'><li><a class="dropdown-item" >DomainFooter</a></li></Link>
            <Link to='/FooterAbout'><li><a class="dropdown-item" >FooterAbout</a></li></Link>
            <Link to='/FooterJob'><li><a class="dropdown-item" >FooterJob</a></li></Link>
            <Link to='/FooterAPP'><li><a class="dropdown-item" >FooterApp</a></li></Link>
            <Link to='/Contactus'><li><a class="dropdown-item" >FooterContactus</a></li></Link>
           
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}
