import { ICharacter } from '../models/ICharacter';
import CharacterPresentation from './CharacterPresentation';

interface IChild {
    characters: ICharacter[]
}

function Character(props: IChild) {
    return <>
        {            
            props.characters.map((char) =>
                <CharacterPresentation character={char} key={char.id}/>
            )
        }
    </>
}



export default Character