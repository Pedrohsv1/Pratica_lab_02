import { useEffect, useState } from 'react'
import axios from '../node_modules/axios/index'
import './App.css'

const AppNavBar = () => {
  return(
    <>
      <h1>Escolha uma sigla!</h1>
    </>
  )
}

const AppUFLista = (props: any) => {
  // const list = [
  //   {id: 1, nome: 'Piaui', sigla: 'PI'},
  //   {id: 2, nome: 'São Paulo', sigla: 'SP'},
  // ]
  const [carregar, setCarregar] = useState(false)
  const [ufs, setUfs] = useState<any>(null) 
  
  useEffect(() => {
    if(carregar)
    {
      axios.get('https://infoweb-api.vercel.app/uf').then((response) => {
        setUfs(response.data);
      });
    }

  }, [carregar]);



  // const [name, setName] = useState('name')

  // const handleSave = () => {
  //   console.log(name, sigla);
  //   props.nameHandle(name);
  //   props.siglaHandle(sigla);
  // }


  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1em', alignItems: 'center', justifyContent: 'center'}}>
      {carregar === false &&
        <button onClick={() => setCarregar(true)}>Carregar Estados</button>
      }
      {ufs && ufs.data.map((uf: any) => (
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
      <h2>{props.sigla} - {props.name}</h2>
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
