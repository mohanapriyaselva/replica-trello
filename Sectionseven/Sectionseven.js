import React from "react";



export function Sectionseven(){
    return(
        <>
        {/* <img src={require('../Sectionseven/Car1.png')} className="col-6 m-5" alt="carasol-1"/>
        <img src={require('../Sectionseven/Car2.png')} className="col-6 m-5" alt="carasol-2"/>
        <img src={require('../Sectionseven/Car3.png')} className="col-6 m-5" alt="carasole-3"/> */}
        <div className="col-6">
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={require('../Sectionseven/Car1.png')} className="col-7 m-5" alt="carasol-1"/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../Sectionseven/Car2.png')} className="col-7 m-5" alt="carasol-2"/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../Sectionseven/Car3.png')} className="col-7 m-5" alt="carasole-3"/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        </> 
    );
}