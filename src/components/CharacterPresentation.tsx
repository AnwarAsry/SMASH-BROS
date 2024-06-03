import { ICharacter } from '../models/ICharacter';

interface IChild {
    character: ICharacter
}

function Character({character}: IChild) {
    return <>
        <div className="player_card" data-fighterid={character.id}>
            <img className='player_card__pict' src={character.imgURL} alt={character.name} />
            <p className="player_card__name">{character.name}</p>
        </div>
    </>
}



export default Character