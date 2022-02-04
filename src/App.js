import './App.css';
import Navbar from './components/navbar/NavBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <p></p>
      </div>
      <div className="container">
        <div cclassNamelass="accordion row" id="accordionExample">
          <div className="accordion-item col-auto shadow">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                PIZZAS
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li className=''>MUZZARELLA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>NAPOLITANA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON</li>
                      <p>Grande $950 / Chica $750</p>  
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON Y MORRONES</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>FUGAZZA</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                      <li className=''>FUGAZETTA RELLENA</li>
                      <p>Grande $950 / Chica $750</p> 
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item col-auto shadow">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                EMPANADAS
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li className=''>MUZZARELLA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>NAPOLITANA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON</li>
                      <p>Grande $950 / Chica $750</p>  
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON Y MORRONES</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>FUGAZZA</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                      <li className=''>FUGAZETTA RELLENA</li>
                      <p>Grande $950 / Chica $750</p> 
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item col-auto shadow">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                CALZONES
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li className=''>MUZZARELLA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>NAPOLITANA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON</li>
                      <p>Grande $950 / Chica $750</p>  
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON Y MORRONES</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>FUGAZZA</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                      <li className=''>FUGAZETTA RELLENA</li>
                      <p>Grande $950 / Chica $750</p> 
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item col-auto shadow">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                PROMOCIONES
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li className=''>MUZZARELLA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>NAPOLITANA</li>
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON</li>
                      <p>Grande $950 / Chica $750</p>  
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>JAMON Y MORRONES</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button>
                      <hr></hr>
                      <li className=''>FUGAZZA</li>  
                      <p>Grande $950 / Chica $750</p>
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                      <li className=''>FUGAZETTA RELLENA</li>
                      <p>Grande $950 / Chica $750</p> 
                      <button type="button" class="btn btn-danger">Pedir +</button><hr></hr>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;