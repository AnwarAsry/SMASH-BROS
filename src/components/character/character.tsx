import { MouseEvent } from 'react'
import pikachu from '../../assets/pikachu_ssbu.jpeg'

function Character() {
    const handleShowCharacter = (e: MouseEvent) => {
        console.log(e.currentTarget);
    }

    return (
        <div className="player_card" onClick={handleShowCharacter} data-fighterid={1}>
            <img className='player_card__pict' src={pikachu} alt="pikachu" />
            <p className="player-card__name">Pikachu</p>
        </div>
    )
}



export default Character