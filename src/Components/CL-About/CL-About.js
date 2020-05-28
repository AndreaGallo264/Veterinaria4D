import React from 'react';
import './CL-About.css';
import perfilVete01 from './../../img/marcosveterinario.jpg';
import perfilVete02 from './../../img/marianaVete.jpg';
import perfilVete03 from './../../img/DavidPeluq.jpg';
import perfilVete04 from './../../img/VaninaPeluq.jpg';
import './../Css/imagehover.min.css';
import './../Css/hover-min.css'

const CL_About = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col mt-2 div-about shadow">
                    <header className="text-center">
                        <h3 className="texto-1 hvr-buzz-out">Conoce a nuestros profesionales</h3>
                    </header>
                    <div className="galeria d-flex justify-content-center">
                    <div class="card card-team text-white">
                    <img src={perfilVete01} alt="..." className="img-thumbnail img-about" width="200px" />
  <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
    <h5 class="card-title titulo-card">Marcos Heredia</h5>
    <h5 class="card-title titulo-card"> Veterinario</h5>
  </div>
</div>
<div class="card card-team text-white">
                    <img src={perfilVete02} alt="..." className="img-thumbnail img-about" width="200px" />
  <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
    <h5 class="card-title titulo-card">Mariana Justiani</h5>
    <h5 class="card-title titulo-card"> Veterinaria</h5>
  </div>
</div>
<div class="card card-team text-white">
                    <img src={perfilVete03} alt="..." className="img-thumbnail img-about" width="200px" />
  <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
    <h5 class="card-title titulo-card">David Cabezas</h5>
    <h5 class="card-title titulo-card">Estilista</h5>
  </div>
</div>
<div class="card card-team text-white">
                    <img src={perfilVete04} alt="..." className="img-thumbnail img-about" width="200px" />
  <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
    <h5 class="card-title titulo-card">Vanina Cristofori</h5>
    <h5 class="card-title titulo-card">Estilista</h5>
  </div>
</div>

                    </div>
               
                </div>
            </div>
        </div>
     );
}
 
export default CL_About;