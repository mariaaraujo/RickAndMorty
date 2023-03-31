import Busca from '@/components/Busca'
import Filtro from '@/components/Filtro'
import CardPersonagem from '@/components/CardPersonagem'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const [fetchData, setFetchData] = useState<any[]>([])
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&status=${status}&gender=${gender}&species=${species}`
  useEffect(() => {
    (async function () {
      const res = await fetch(url)
      const data = await res.json()
      setFetchData(data)
    })()
  }, [url])

  return(
    <div style={{textAlign: 'center'}}>
      <Head>
        <title>Rick & Morty</title>
        <meta name="description" content="App to view all Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Busca setName={setName} setPageNumber={setPageNumber} />
      </div>
      <div style={{ justifyContent: 'center', display: 'flex'}}>
        <Filtro setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <CardPersonagem resultados={fetchData['results']} />
      </div>
      <div>
        <Pagina
          info={fetchData['info']}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  )
}
export default Home