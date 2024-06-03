import '../App.scss'
import Characters from './Characters.tsx'
import { useEffect, useState } from 'react'
import { ICharacter } from '../models/ICharacter.ts';
import { getAllCharacters } from '../services/characterService.ts';


function Index() {

  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const sortOrder: string = "asc"
  const sortBy: string = "id"

  const addCharactersToState = async () => {
    const rows = await getAllCharacters(sortBy, sortOrder)
    setCharacters(rows)
  }

  useEffect(() => {
    if (characters.length > 0) return
    addCharactersToState()
  })

  return (
    <>
      <main>
        <section className='intro'>
          <div className='intro__title'>
            <h1 id="title">Supper Smash Bros. Ultimate</h1>
          </div>
          <div className='shortcuts'>
            <div className='shortcuts__search'>
              <form action="#" method='get'>
                <input id='searchInp' type="text" placeholder='Search Fighter..' />
              </form>
            </div>
            <div className="shortcuts__btn">
              <button className='btn' id='shortBtnFighters'>Fighters</button>
              <button className='btn' id='shortBtnSpirit'>Spirits</button>
            </div>
          </div>
        </section>
        <section className='topPlayers' id="introSection">
          <div className='topPlayers__title'>
            <h2 id='title'>Top Players</h2>
          </div>
          <div className='topPlayers__top-picks'>
            <Characters characters={characters}/>
          </div>
        </section>
      </main>
    </>
  )
}



export default Index
