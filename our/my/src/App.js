import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import I1 from './assets/1.png'
import I2 from './assets/2.png'
import I3 from './assets/3.png'
import I4 from './assets/4.png'
import I5 from './assets/5.png'
import I6 from './assets/6.png'
import I7 from './assets/7.png'
import I8 from './assets/8.png'
import I9 from './assets/9.png'
import I10 from './assets/10.png'
import I11 from './assets/11.png'


const App = () => {

  const [status,setStatus]=useState(false);
  const [msg,setMsg]=useState("");
  const ok=()=>{
setStatus(true);
  }

  const no=()=>{
    setMsg(" Khara wala sang bhikareeee");
  }

  return (  <div>
    {
      status && <Carousel>
    
 
      <div>
          <img src={I1} />
     
      </div>
      <div>
          <img src={I2} />
          
      </div>
      <div>
          <img src={I3} />
         
      </div>
      <div>
          <img src={I4} />
          
      </div>
      <div>
          <img src={I5} />
          
      </div><div>
          <img src={I6} />
          
      </div><div>
          <img src={I7} />
          
      </div><div>
          <img src={I8} />
          
      </div><div>
          <img src={I9} />
          
      </div><div>
          <img src={I10} />
          
      </div><div>
          <img src={I11} />
          
      </div> 
  </Carousel>
    }
    {
      !status&&  <div class="card m-4 p-3" >
      <div class="card-header">
          Answer the question to proceed
        </div>
        <div class="card-body mb-3">
          Tu Kunachii...? {msg}
        </div>
        <div class="btn-group mb-5" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info" onClick={no}>Mhiti nhi</button>
        <button type="button" class="btn btn-info" onClick={ok}>Tujhi</button>
        <button type="button" class="btn btn-info" onClick={no}>🤔mmm</button>
      </div>
      </div>
    }

</div>
  );
}


export default App;