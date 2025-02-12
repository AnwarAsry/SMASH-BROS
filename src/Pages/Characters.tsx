import IntroStyles from "@/styles/Introduction.module.scss"
import Gridlayout from "@/styles/GridLayout.module.scss"

import { SearchForm } from "@/components/Form/SearchForm"
import { GridLayout } from "@/components/GridLayout"
import { ICharacter } from "@/models/ICharacter";
import { getAllCharacters } from "@/services/characterService";
import { useState, useEffect } from "react";
import { CharacterCard } from "@/components/Characters/CharacterCard";


function Characters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const sortOrder: string = "asc"
  const sortBy: string = "id"

  const addCharactersToState = async () => {
    try {
      const rows = await getAllCharacters(sortBy, sortOrder)
      setCharacters(rows)
    } catch (error) {
      console.log("[FETCH ERROR] Could not fetch data:", error);
    }
  }

  useEffect(() => {
    addCharactersToState()
  }, [])

  return (
    <>
      <main>
        <section className={IntroStyles.IntroWrapper}>
          <SearchForm />
        </section>
        <section>
          <GridLayout className={Gridlayout.AllCharactersGrid}>
            {
              characters?.map((char) => <CharacterCard character={char} key={char.id} />)
            }
          </GridLayout>
        </section>
      </main>
    </>
  )
}

export default Characters;