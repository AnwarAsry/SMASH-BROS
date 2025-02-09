import CharacterCardStyles from '@/styles/CharacterCard.module.scss';

import { ICharacter } from '@/models/ICharacter';
import { redirect } from 'react-router-dom';


interface IChild {
    character: ICharacter
}

export const CharacterCard = ({ character }: IChild) => {
    return <>
        <div className={CharacterCardStyles.PlayerCard} onClick={() => redirect("/characters/" + character.id)}>
            <img className={CharacterCardStyles.PlayerCardPic} src={character.imgURL} alt={character.name} />
            <p className={CharacterCardStyles.PlayerCardName}>{character.name}</p>
        </div>
    </>
}