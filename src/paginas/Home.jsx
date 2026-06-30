import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>projeto kanban</h1>
      <p>organize suas tarefas em quadros simples e visuais.</p>

      {/* RF03 - botões distintos, cada um leva pra uma url diferente */}
      <div className="acoes-home">
        <Link to="/login" className="botao botao-secundario">entrar</Link>
        <Link to="/cadastro" className="botao botao-primario">criar conta</Link>
      </div>
    </div>
  )
}