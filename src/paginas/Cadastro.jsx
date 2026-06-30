import { useState } from 'react'

export default function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState(null)
  const [enviando, setEnviando] = useState(false)

  const enviarCadastro = async (evento) => {
    evento.preventDefault()
    setMensagem(null)
    setEnviando(true)

    try {
      const resposta = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_completo: nomeCompleto, email, senha })
      })

      const dados = await resposta.json()

      if (!resposta.ok) {
        setMensagem({ tipo: 'erro', texto: dados.erros.join(', ') })
        return
      }

      setMensagem({ tipo: 'sucesso', texto: 'cadastrado!' })
      setNomeCompleto('')
      setEmail('')
      setSenha('')

    } catch (erro) {
      setMensagem({ tipo: 'erro', texto: 'não foi possível conectar ao servidor' })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="formulario-pagina">
      <h1>criar conta</h1>

      <form onSubmit={enviarCadastro}>
        <label htmlFor="nome">nome completo</label>
        <input
          id="nome"
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          placeholder="ex: maria silva"
          required
        />

        <label htmlFor="email">e-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ex: maria@email.com"
          required
        />

        <label htmlFor="senha">senha</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="mínimo 8 caracteres"
          required
        />

        <button type="submit" disabled={enviando}>
          {enviando ? 'enviando...' : 'cadastrar'}
        </button>

        {mensagem && (
          <p className={`mensagem mensagem-${mensagem.tipo}`}>{mensagem.texto}</p>
        )}
      </form>
    </div>
  )
}