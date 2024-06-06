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

  return <>
    <main>
      <section className='intro'>
        <div className='intro__title'>
          <h1>Supper Smash Bros. Ultimate</h1>
        </div>
        <div className='intro__shortcuts'>
          <form className='intro__formSearch' action="#" method='get'>
            <input className='intro__formSearch-input' id='searchInp' type="text" placeholder='Search Fighter..' />
          </form>
          <div className="intro__btns">
            <button className='intro__btns-btn' id='shortBtnFighters'>Fighters</button>
            <button className='intro__btns-btn' id='shortBtnSpirit'>Spirits</button>
          </div>
        </div>
      </section>
      <section className='topPlayers'>
        <h2 className='topPlayers__title'>Top Players</h2>
        <Characters className="topPlayers__top-picks" characters={characters}/>
      </section>
    </main>
  </>
}



export default Index
