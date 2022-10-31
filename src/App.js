import logo from './logo.svg';
import './App.css';
import Flechita from './components/Flechita';
import data from './data/events1'
import NombreFoto from './components/NombreFoto';
import CampoConArray from './components/CampoConArray';
import { useState } from 'react';

function App() {
  let [mostrarOcultar, setMostrarOcultar] = useState (true)
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
      <NombreFoto category={data[numeroAcambiar].category} image={data[numeroAcambiar].image} />
      { mostrarOcultar ? (<>
      <div className='datos white flex a-center'>
        <CampoConArray propiedad={data[numeroAcambiar].name}/>
      </div>
      <div className='datos white flex a-center'>
        <CampoConArray propiedad={data[numeroAcambiar].description}/>
      </div>  
      <p className='gray flex j-center a-center' onClick={mostrar}>ocultar info</p>
      </>): (<p className='gray flex j-center a-center' onClick={mostrar}>mostrar info</p>)}

      <div className='flex j-center a-center'>
        <Flechita  verbo="anterior" estilo="r25" onClick={prev}/>
        <Flechita  verbo="anterior" estilo="l25" onClick={next}/>
      </div>
    </div>
  );
}

export default App;
