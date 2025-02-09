import '@/App.scss'
import IntroStyles from "@/styles/Introduction.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"
import Gridlayout from "@/styles/GridLayout.module.scss"

import { ICharacter } from '@/models/ICharacter.ts';
import { GridLayout } from "@/components/GridLayout"
import { CharacterCard } from "@/components/Characters/CharacterCard"
import { SearchForm } from "@/components/Form/SearchForm"

import { getAllCharacters } from '@/services/characterService.ts';

import { useEffect, useState } from 'react'


const LandingPage = () => {
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
  </>
}

export default LandingPage