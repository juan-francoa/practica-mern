import logo from './logo.svg';
import './App.css';
import Flechita from './components/Flechita';
import data from './data/perfiles'
import NombreFoto from './components/NombreFoto';
import CampoConArray from './components/CampoConArray';
import { useState } from 'react';

function App() {
  let [mostrarOcultar, setMostrarOcultar] = useState (false)
  let [numeroAcambiar, setNumeroAcambiar] = useState (0)
  let mostrar = ()=>{
    setMostrarOcultar(!mostrarOcultar)
  }
  let prev = ()=>{
    if(0 < numeroAcambiar){
      setNumeroAcambiar(--numeroAcambiar)
    }
    else{
      setNumeroAcambiar(data.length -1)
    }
  }
  let next = ()=>{
    if(data.length-1 > numeroAcambiar){
      setNumeroAcambiar(++numeroAcambiar)
    }
    else{
      setNumeroAcambiar(0)
    }
  }
  return (
    <div className='card black'>
      <NombreFoto name={data[numeroAcambiar].nombre} img={data[numeroAcambiar].foto} />
      
      { mostrarOcultar ? (<>
        <p className='gray flex j-center a-center' onClick={mostrar}>ocultar info</p>
        <div className='edad-fecha'>
        <p className='datos white r25 edad'>Edad: {data[numeroAcambiar].edad}</p>
        <p className='datos white l25 fecha'>Fecha: {data[numeroAcambiar].nacimiento}</p>
      </div>
      <div className='datos white flex a-center'>
        <CampoConArray propiedad="Mail" valor={data[numeroAcambiar].mail}/>
      </div>
      <div className='datos white flex a-center'>
        <CampoConArray propiedad="comida" valor={data[numeroAcambiar].comidas.join(" y ")}/>
      </div>
      <div className='datos white flex a-center'>
        <CampoConArray propiedad="hobbies" valor={data[numeroAcambiar].hobbies.join(" y ")}/>
      </div>  
      </>): (<p className='gray flex j-center a-center' onClick={mostrar}>mostrar info</p>)}

      <div className='flex j-center a-center'>
        <Flechita  verbo="anterior" estilo="r25" onClick={prev}/>
        <Flechita  verbo="anterior" estilo="l25" onClick={next}/>
      </div>
    </div>
  );
}

export default App;
