
import React from 'react'
import haircut from '../Images/haircut.jpg'
import facial from '../Images/facial.avif'
import pedicure from '../Images/pedicure.jpg'
import manicure from '../Images/manicure.jpg'
import threading from '../Images/threading.jpg'
import haircolor from '../Images/hair color.jpg'
import ss from '../Images/ss.jpeg'
import ss1 from '../Images/ss1.jpg'
import ss2 from '../Images/ss2.jpeg'
import ss3 from '../Images/ss3.jpeg'


export default function User() {
  return (

<div className='salo'>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div className="card-offer">
      <img src={haircut}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">HairCut</h3>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-offer">
      <img src={facial}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Facial</h3>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-offer">
      <img src={pedicure} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">pedicure</h3>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-offer">
      <img src={haircolor} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Hair coloring</h3>
        <p class="card-text"></p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card-offer">
      <img src={threading} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Threading</h3>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-offer">
      <img src={manicure} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Manicure</h3>
        <p class="card-text"></p>
      </div>
    </div>
  </div>


  <div id='ss'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div id='im' class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={ss} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={ss1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" id='lip' data-bs-interval='1000'>
      <img src={ss2} class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item"  data-bs-interval='1000'>
      <img src={ss3} class="d-block w-100" alt="..."/>
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
</div>
</div>
</div>











)
}