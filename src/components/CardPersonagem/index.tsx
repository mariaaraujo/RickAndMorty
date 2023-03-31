import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Character } from './CardType';
import { Container } from './style';
import NotFound from '@/assets/not-found.png'

const isFavorite = (character: Character, favoriteCharacters: Character[]) =>
  favoriteCharacters.some((favChar) => favChar.id === character.id)

const FAVORITE_CHARACTERS_KEY = "favoriteCharacters";


const CardPersonagem = ({resultados}) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITE_CHARACTERS_KEY);
    if (storedFavorites) {
      try {
        const favorites = JSON.parse(storedFavorites);
        setFavoriteCharacters(favorites);
      } catch (error) {
        console.error('Error parsing favorite characters', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      FAVORITE_CHARACTERS_KEY,
      JSON.stringify(favoriteCharacters)
    );
  }, [favoriteCharacters]);

  const handleFavorite = (character: Character) => {
    setFavoriteCharacters((prevFavorites) => [...prevFavorites, character]);
  };

  const handleRemoveFavorite = (character: Character) => {
    setFavoriteCharacters((prevFavorites) =>
      prevFavorites.filter((favChar) => favChar.id !== character.id)
    )
  }
  return(
    <>
      {resultados ? resultados.map(e => {
        return(
          <>
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
              {isFavorite(e, favoriteCharacters) ? (
            <button onClick={() => handleRemoveFavorite(e)}>
              Remover dos Favoritos
            </button>
          ) : (
            <button onClick={() => handleFavorite(e)}>Favoritar</button>
          )}
            </div>
          </Container>
          </>
        )
      }) : 
        <div style={{color: '#fff', margin: '2rem'}}>
          <p style={{color: '#1e1c1c', fontSize: '1.6rem', fontWeight: 600}}>Nenhum personagem encontrado! :(</p>
          <Image 
            width={500}
            height={500}
            src={NotFound}
            alt="Personagem não encontrado"
          />
        </div>
    }
    </>
    )
}

export default CardPersonagem