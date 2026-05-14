import { useEffect } from "react"

export default function AttMedia() {
  useEffect(() => {
    document.title = 'media'

    const pa = async () => {
      const resposta = await fetch('http://localhost:3000/join_att2')
      const dados = await resposta.json()
      console.log(dados)
    }
    pa()
  }, [])

  return (
    <div>
      <h1>att-media</h1>
    </div>
  )
}