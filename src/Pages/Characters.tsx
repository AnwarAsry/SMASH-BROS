import IntroStyles from "@/styles/Introduction.module.scss"
import Gridlayout from "@/styles/GridLayout.module.scss"

import { SearchForm } from "@/components/Form/SearchForm"
import { GridLayout } from "@/components/GridLayout"


function Characters() {

  return (
    <>
      <main>
        <section className={IntroStyles.IntroWrapper}>
          <SearchForm />
        </section>
        <section>
          <GridLayout className={Gridlayout.AllCharactersGrid}>
            {/* {
              characters?.map((char) => <CharacterCard character={char} key={char.id} />)
            } */}
          </GridLayout>
        </section>
      </main>
    </>
  )
}

export default Characters;