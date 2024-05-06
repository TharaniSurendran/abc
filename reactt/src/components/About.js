import React from 'react'
import IMAGE15 from '../Images/IMAGE15.jpg'
import image6 from '../Images/image6.jpg'
import image1 from '../Images/image1.jpg'
import image17 from '../Images/image17.jpg'
export default function About() {
  return (
    <div className='at'>
      
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 id='hd'>"In our Website You can Customise your services and salon"
</h1>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image6} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 id='hd'>Premium Salon Services</h1>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image17}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 id='hd'>You are showered with many offers and discounts</h1>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={IMAGE15}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Book your Appointments</h1>
        <p></p>
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
  )
}
