import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="pagina">
      
      <Link to="/" className="botao-home">
        ☰ início
      </Link>

      <main>
        <Outlet />
      </main>
    </div>
  )
}