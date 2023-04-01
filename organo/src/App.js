import { useState } from 'react';
import Banner  from './componentes/Banner'; // Estariamos importando index.js por automatico
import Formulario from './componentes/Formulario';

function App() {

  const [colaborador, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
