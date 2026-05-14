import { useEffect } from "react"

export default function AttFacil() {
  useEffect(() => {
    document.title = 'facil'

    const pa = async () => {
      const resposta = await fetch('http://localhost:3000/join_att1')
      const dados = await resposta.json()
      console.log(dados)
    }
    pa()
  }, [])

  return (
    <div>
      <h1>att-facil</h1>
    </div>
  )
}