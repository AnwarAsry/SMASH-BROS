import { MouseEvent } from 'react'
import pikachu from '../assets/pikachu_ssbu.jpeg'
import { ICharacter } from '../models/ICharacter';
// import image from '../assets/CharacterBackground.png'

interface IChild {
    characters: ICharacter[]
}

function Character(props: IChild) {
    return <>
        {            
            props.characters.map((char) =>
                <div className="player_card" data-fighterid={char.id} key={char.id}>
                    <img className='player_card__pict' src={pikachu} alt="pikachu" />
                    <p className="player_card__name">{char.name}</p>
                </div>
            )
        }
    </>
}



export default Character