import { Container } from "@/components/CardPersonagem/style";
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button } from "reactstrap"
import Image from 'next/image'
import { Character } from "@/components/CardPersonagem/CardType";
import NotFoundFavorite from '@/assets/not-found-favorite.png'

const FAVORITE_CHARACTERS_KEY = "favoriteCharacters";

function Favorites() {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITE_CHARACTERS_KEY)
    if (storedFavorites) {
      setFavoriteCharacters(JSON.parse(storedFavorites));
    }
  }, [])

  const handleRemoveFavorite = (character: Character) => {
    setFavoriteCharacters((prevFavorites) =>
      prevFavorites.filter((favChar) => favChar.id !== character.id)
    );
  };
  return(
    <>
    <div style={{textAlign: 'center'}}>
    <Head>
        <title>Rick & Morty - Favoritos</title>
        <meta name="description" content="Favorite Rick and Morty characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div style={{margin: '2rem'}}>
      <Link href="/">
        <Button color="success" outline>{`<- Voltar`}</Button>
      </Link>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex'}}>
        <h1>Personagens Favoritos</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {favoriteCharacters.length > 0 ? favoriteCharacters.map((e) => {
          return (
            <Container key={e.id}>
            <div>
              <Image className="img" src={e.image} width={300} height={320} alt={e.name} />
            </div>
            <div className="content">
              <div className="content-info">
                <a>{e.name}</a>
                <span className="status">
                  <span className={`status-icon-${e.status}`}></span>
                  <span>{e.status} - {e.species}</span>
                </span>
              </div>
              <div className="content-info">
                <span className="status-gray"> Gênero </span>
                <span className="status">{e.gender}</span>
              </div>
              <div className="content-info">
                <span className="status-gray"> Visto pela última vez em: </span>
                <span className="status">{e.location.name}</span>
              </div>
              <div className="content-info">
                <span className="status-gray"> Aparição em episódios: </span>
                <span className="status">{(e.episode).length}</span>
              </div>
              <button onClick={() => handleRemoveFavorite(e)}>Remover favorito</button>
            </div>
          </Container>)}
        ) : 
        <div style={{color: '#fff', margin: '2rem'}}>
          <p style={{color: '#1e1c1c', fontSize: '1.6rem', fontWeight: 600}}>Você ainda não favoritou nenhum personagem! :/</p>
          <Image 
            width={800}
            height={400}
            src={NotFoundFavorite}
            alt="Personagem não encontrado"
          />
        </div>
        }
      </div>
    </div>
      
    
    </>
  )  
}

export default Favorites


