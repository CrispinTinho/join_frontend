import { useEffect, useState } from "react"

export default function Preco() {
  const [contador, setContador] = useState(0)
 
  useEffect( () => {
    document.title = 'Contagem' + contador

    const pa = async () => {
     const resposta = await fetch('http://localhost:3000/compras')
    const dados = await resposta.json()
    console.log(dados);
    }
   pa()
    
  }, [preco])

  return (
    <div>
      <h1>Preço</h1>
    </div>
  )
}