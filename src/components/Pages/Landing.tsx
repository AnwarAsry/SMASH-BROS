import IntroStyles from "@/styles/Introduction.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"
import Gridlayout from "@/styles/GridLayout.module.scss"

import { ICharacter } from '@/models/ICharacter.ts';
import { GridLayout } from "../GridLayout"
import { CharacterCard } from "@/components/Characters/CharacterCard"
import { SearchForm } from "../Form/SearchForm"


interface IChild {
  characters: ICharacter[]
}

const LandingPage = ({ characters }: IChild) => {
  return <>
    <main>
      <section className={IntroStyles.IntroWrapper}>
        <div className={IntroStyles.IntroTitle}>
          <h1>Supper Smash Bros. Ultimate</h1>
        </div>
        <div className={IntroStyles.IntroShortcuts}>
          <SearchForm />
          <div className={ButtonStyles.ShortcutsBtnsContiner}>
            <button className={ButtonStyles.PrimaryBtn}>Fighters</button>
            <button className={ButtonStyles.PrimaryBtn}>Spirits</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className={IntroStyles.TopPlayersTitle}>Top Players</h2>
        <GridLayout className={Gridlayout.TopPicksGrid}>
          {
            characters.map((char) => <CharacterCard character={char} key={char.id} />)
          }
        </GridLayout>
      </section>
    </main>
  </>
}

export default LandingPage