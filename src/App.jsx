import { useState } from 'react';
import Header from './components/Header';
import ListadoPaciente from './components/ListadoPaciente';
import Formulario from './components/Formulario';

function App() {
  const [pacientes, setPacientes]=useState([]);
  const [paciente, setPaciente]=useState({});

  return (
   <div className='conainer mx-auto mt-20'>
      <Header/>

      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
         
        />
      </div>
      
   </div>
  )
}

export default App
