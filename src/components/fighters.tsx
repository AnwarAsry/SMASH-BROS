import "../scss/Fighters.scss"
import { ICharacter } from '../models/ICharacter.ts'
import Characters from './Characters.tsx'


interface IChild {
  characters: ICharacter[]
}


function Fighters({characters}: IChild) {

  return (
    <>
      <main>
        <section className='search'>
          <form className='search__form' action="#" method='get'>
            <input className='search__input' id='searchInp' type="text" placeholder='Search Fighter..' />
          </form>
        </section>
        <section className='playersContainer'>
          <Characters className='playersGrid' characters={characters}/>
        </section>
      </main>
    </>
  )
}



export default Fighters
