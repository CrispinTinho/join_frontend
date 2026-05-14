import { useEffect } from "react"

export default function AttDificil() {
  useEffect(() => {
    document.title = 'dificil'

    const pa = async () => {
      const resposta = await fetch('http://localhost:3000/join_att3')
      const dados = await resposta.json()
      console.log(dados)
    }
    pa()
  }, [])

  return (
    <div>
      <h1>att-dificil</h1>
    </div>
  )
}