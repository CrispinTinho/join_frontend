import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="pagina">
      {/* RF08 (simplificado) - botão fixo no topo em todas as telas, leva pra home */}
      <Link to="/" className="botao-home">
        ☰ início
      </Link>

      <main>
        <Outlet />
      </main>
    </div>
  )
}