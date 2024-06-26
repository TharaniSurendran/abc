import React from 'react'
import offer1 from '../Images/offer1.jpg'
import offer2 from '../Images/offer2.jpg'
import offer3 from '../Images/offer3.avif'
import offer4 from '../Images/offer4.jpg'


export default function Offer() {
  return (
    <div className='of'>
      <div className='off'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={offer1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={offer2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" id='lip' data-bs-interval='1000'>
      <img src={offer3} class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item"  data-bs-interval='1000'>
      <img src={offer4} class="d-block w-100" alt="..."/>
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
  )
}
