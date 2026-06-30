import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [feito, setFeito] = useState(false)

  const entrar = (evento) => {
    evento.preventDefault()
    setFeito(true)
  }

  return (
    <div className="formulario-pagina">
      <h1>entrar</h1>

      <form onSubmit={entrar}>
        <label htmlFor="email">e-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">senha</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">entrar</button>

        {feito && <p className="mensagem mensagem-sucesso">login feito!</p>}
      </form>
    </div>
  )
}