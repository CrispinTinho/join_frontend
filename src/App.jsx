import { Routes, Route } from 'react-router-dom'
import Layout from './componentes/Layout'
import Home from './paginas/Home'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  )
}

export default App