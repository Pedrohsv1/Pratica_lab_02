import { useState } from 'react'
import './App.css'

const AppNavBar = () => {
  return(
    <>
    <h1>Titulo Fixo</h1>
    </>
  )
}

const AppUFLista = (props: any) => {
  const list = [
    {id: 1, name: 'Piaui', sigla: 'PI'},
    {id: 2, name: 'São Paulo', sigla: 'SP'},
  ]

  const [sigla, setSigla] = useState('sigla')
  const [name, setName] = useState('name')

  const handleSave = () => {
    console.log(name, sigla);
    props.nameHandle(name);
    props.siglaHandle(sigla);
  }


  return (
    <div>
      {list.map((uf) => (
        <button key={uf.id} onClick={() => {setName(uf.name); setSigla(uf.sigla); handleSave()}}>
          <h3>{uf.sigla}</h3>
        </button>
      ))
      }
    </div>
  )
}

const AppUFDetalhes= (props: {sigla: string, name: string}) => {
  return (
    <div>
      <h3>{props.sigla} - {props.name}</h3>
    </div>
  )
}


function App() {
  const [sigla, setSigla] = useState('sigla')
  const [name, setName] = useState('name')


  return (
    <>
      <AppNavBar />
      <AppUFDetalhes sigla={sigla} name={name}/>
      <AppUFLista siglaHandle={(e: string) => {setSigla(e)}} nameHandle={(e: string) => {setName(e)}}/>
    </>
  )
}

export default App
