import { ICharacter } from '../models/ICharacter';
import CharacterPresentation from './CharacterPresentation';

interface IChild {
    characters: ICharacter[]
    className: string
}

function Characters({characters, className}: IChild) {
    return <>
        <div className={className}>
            {            
                characters.map((char) =>
                    <CharacterPresentation character={char} key={char.id}/>
                )
            }
        </div>
    </>
}



export default Characters