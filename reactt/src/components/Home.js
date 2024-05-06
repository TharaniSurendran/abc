import React from 'react';
import top from '../Images/top.jpg'

export default function About() {
  return (
    <div id='aboutContainer'>
      <div className='aboutUs'>
        <div>
      <h1 className='intro'><i>One of India's leading E-parlour</i></h1>
      </div>
      <div className='prof'>
      <div class="card mb-3">
        <div className='card'>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={top} class="img-card" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">Professional salon experience delivered by certified expertise</h1>
        <p class="card-text">Fuelled by the vision of making beauty and styling accessible to all, an aspiration that was earlier restricted only to the privileged, FMCG giant Cavinkare launched a first-of-its-kind professional, unisex salon chain “green trends”. Green Trends transformed the landscape of salons and made beauty and styling aspirations a reality for all. With a vast network of 375+ salons, green trends delivers its vision of accessible beauty and styling services to the far-reaching corners of the country with its presence across 50+ cities. With scientifically designed services using world-class products delivered by certified skin and hair experts, green trends caters to one’s head-to-toe grooming, beauty and styling needs at exceptional value.</p>
        <p class="card-text"><small class="text-body-secondary"></small></p>
      </div>
    </div>
  </div>
</div>
          </div>
         </div> 
         </div>
<div className='values'>
         <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h3 class="card-title">Quality</h3>
        <p class="card-text">We will have a ‘Zero-compromise’ approach to quality which will be ensured by services that are delivered with world-class products and techniques and with fail-safe hygienic practices, in an environment designed to be comfortable yet luxurious.
</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h3 class="card-title">Innovation</h3>
        <p class="card-text">We will continually seek ways to re-imagine the technique and technology used to deliver beauty and styling services and foster thought leadership in offering superior customer experience to ensure we are always ahead of the curve.
</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h3 class="card-title">Values</h3>
        <p class="card-text">We will provide best-in-class services with personalised consultation and skilled service delivery by ensuring meticulous training and developing skills of our experts in skin, body and hair styling sciences.
</p>
      </div>
    </div>
  </div>
  </div>

</div>
</div>









  );
}