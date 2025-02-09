import IntroStyles from "@/styles/Introduction.module.scss"
import Gridlayout from "@/styles/GridLayout.module.scss"

import { ICharacter } from '@/models/ICharacter.ts'
import { GridLayout } from "../GridLayout.tsx"
import { CharacterCard } from "../Characters/CharacterCard.tsx"
import { SearchForm } from "../Form/SearchForm.tsx"


interface IChild {
  characters: ICharacter[]
}


function Fighters({ characters }: IChild) {

  return (
    <>
      <main>
        <section className={IntroStyles.IntroWrapper}>
          <SearchForm />
        </section>
        <section>
          <GridLayout className={Gridlayout.AllCharactersGrid}>
            {
              characters.map((char) => <CharacterCard character={char} key={char.id} />)
            }
          </GridLayout>
        </section>
      </main>
    </>
  )
}



export default Fighters
