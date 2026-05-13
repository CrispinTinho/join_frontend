import { useState } from 'react'
import './App.css'

import Preco from './paginas/preco'
import Item from './paginas/item'
import Pessoa from './paginas/pessoa'

function App() {
 const [tela, setTela] = useState('login') 
 
  const renderizarTela = () => {
    if(tela === 'item'){
      return <Item />
    } else if (tela === 'pessoa'){
      return <Pessoa />
    }
      else if (tela === 'preco'){
      return <Preco />
    }
  }

const trocarTela = (pagina) => {
  setTela(pagina)
}

  return (
    <>
      <h1>Minha App</h1>
      <button onClick={ () => trocarTela('item')}>Item</button>
      <button onClick={ () => trocarTela('pessoa')}>Pessoa</button>
      <button onClick={ () => trocarTela('preco')}>Preço</button>
      
      <hr />

      {renderizarTela()}
    </>
  )
}

export default App
