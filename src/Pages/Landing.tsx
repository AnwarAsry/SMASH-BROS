import '@/App.scss'
import IntroStyles from "@/styles/Introduction.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"

import { SearchForm } from "@/components/Form/SearchForm"


const LandingPage = () => {
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
  </>
}

export default LandingPage