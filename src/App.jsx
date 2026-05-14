import { useState } from 'react'
import './App.css'

import AttFacil from './paginas/att-facil'
import AttDificil from './paginas/att-dificil'
import AttMedia from './paginas/att-media'

function App() {
 const [tela, setTela] = useState('login') 
 
  const renderizarTela = () => {
    if(tela === 'att-dificil'){
      return <AttDificil />
    } else if (tela === 'att-media'){
      return <AttMedia />
    }
      else if (tela === 'att-facil'){
      return <AttFacil />
    }
  }

const trocarTela = (pagina) => {
  setTela(pagina)
}

  return (
    <>
      <h1>Minha App</h1>
      <button onClick={ () => trocarTela('att-dificil')}>att-dificil</button>
      <button onClick={ () => trocarTela('att-media')}>att-media</button>
      <button onClick={ () => trocarTela('att-facil')}>att-facil</button>
      
      <hr />

      {renderizarTela()}
    </>
  )
}

export default App
