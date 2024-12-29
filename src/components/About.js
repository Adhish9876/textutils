import React, { useState } from 'react';

export default function About(props) {
    //const [myStyle, setMyStyle] = useState({
       // color: 'black',
       // backgroundColor: 'white',
   // });
   let mystyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#282828':'white'
   }
    

    
   

    return (
      
        <div className="container" style={mystyle}>
            <h1>About Me</h1>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item" >
    <h2 class="accordion-header" style={mystyle}>
      <button style={mystyle}  class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong >Who is Adhish</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" >
        <strong>Naa dha daan leo,    LEO DASSS.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        <strong>Favorite youtube channel</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a href="https://www.youtube.com/@tamilgaming/streams"></a>
      </div>
    </div>
  </div>
  
  </div>
</div>
           
        
    );
}
