import { ICharacter } from '../models/ICharacter';

interface IChild {
    character: ICharacter
}

function Character({character}: IChild) {
    return <>
        <div className="playerCard" data-fighterid={character.id}>
            <img className='playerCard__pict' src={character.imgURL} alt={character.name} />
            <p className="playerCard__name">{character.name}</p>
        </div>
    </>
}



export default Character