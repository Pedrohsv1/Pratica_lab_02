import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const AppNavBar = () => {
  return(
    <>
    <h1>Titulo Fixo</h1>
    </>
  )
}

const AppUFLista = (props: {nameHandle: (nameUF: any) => void, siglaHandle: (siglaUF: any) => void}) => {
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


  const setNames = ( nameUF: any ) => {
    setName(nameUF)
  }
  const setSiglas = ( siglaUF: any ) => {
    setSigla(siglaUF)
  }

  return (
    <>
      <AppNavBar nameHandle={setNames} siglaHandle={setSiglas}/>
      <AppUFDetalhes sigla={sigla} name={name}/>
      <AppUFLista />
    </>
  )
}

export default App
