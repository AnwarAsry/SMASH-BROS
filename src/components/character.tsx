import { ICharacter } from '../models/ICharacter';

interface IChild {
    characters: ICharacter[]
}

function Character(props: IChild) {
    return <>
        {            
            props.characters.map((char) =>
                <div className="player_card" data-fighterid={char.id} key={char.id}>
                    <img className='player_card__pict' src={char.imgURL} alt={char.name} />
                    <p className="player_card__name">{char.name}</p>
                </div>
            )
        }
    </>
}



export default Character