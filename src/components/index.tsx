import { useState } from 'react'
import '../App.scss'
import './character.tsx'
// import './fonts/snes/SnesItalic-1G9Be.ttf';
// import pikachu from '../assets/pikachu_ssbu.jpeg'
import Character from './character.tsx'
import { ICharacter } from '../models/ICharacter.ts';


function Index() {

  const [characters, setCharacters] = useState<ICharacter[]>([{
    id: "1",
    name: "pikachu",
    imgURL: "hej",
    combos: []
  },
  {
    id: "2",
    name: "sonic",
    imgURL: "hej",
    combos: []
  },
  {
    id: "3",
    name: "mario",
    imgURL: "hej",
    combos: []
  }]);

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
            <Character characters={characters}/>
          </div>
        </section>
      </main>
    </>
  )
}



export default Index
