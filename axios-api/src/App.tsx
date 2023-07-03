import { useEffect, useState } from 'react'
import axios from '../node_modules/axios/index'
import './App.css'

const AppNavBar = () => {
  return(
    <>
      <h1>Titulo Fixo</h1>
    </>
  )
}

const AppUFLista = (props: any) => {
  // const list = [
  //   {id: 1, nome: 'Piaui', sigla: 'PI'},
  //   {id: 2, nome: 'São Paulo', sigla: 'SP'},
  // ]

  const [ufs, setUfs] = useState(null) 
  
  useEffect(() => {
    axios.get('https://infoweb-api.vercel.app/uf').then((response) => {
      setUfs(response.data);
    });
  }, []);


  // const [sigla, setSigla] = useState('sigla')
  // const [name, setName] = useState('name')

  // const handleSave = () => {
  //   console.log(name, sigla);
  //   props.nameHandle(name);
  //   props.siglaHandle(sigla);
  // }


  return (
    <div>
      {ufs && ufs.data.map((uf) => (
        <button key={uf.id} onClick={() => {props.nameHandle(uf.nome); props.siglaHandle(uf.sigla);}}>
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
