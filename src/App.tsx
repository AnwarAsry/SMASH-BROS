import './App.scss'
// import './fonts/snes/SnesItalic-1G9Be.ttf';
import pikachu from './assets/pikachu_ssbu.jpeg'


function App() {

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
            <div className="player_card">
              <img className='player_card__pict' src={pikachu} alt="pikachu" />
              <p className="player-card__name">Pikachu</p>
            </div>
            <div className="player_card">
              <img className='player_card__pict' src={pikachu} alt="pikachu" />
              <p className="player-card__name">Pikachu</p>
            </div>
            <div className="player_card">
              <img className='player_card__pict' src={pikachu} alt="pikachu" />
              <p className="player-card__name">Pikachu</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
