import CharacterPageStyles from "@/styles/CharacterPage.module.scss"
import ComingSoonStyles from "@/styles/ComingSoon.module.scss"

import { ICharacter } from "@/models/ICharacter";
import { getCharacter } from "@/services/characterService";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CharacterPage() {
    const [character, setCharacter] = useState<ICharacter | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { id } = useParams();

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const res = await getCharacter(id!);
            if (res) setCharacter(res)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (character) {
        console.log(character.imgURL);

        return <>
            <section className={CharacterPageStyles.Content}>
                <div className={CharacterPageStyles.Right}>
                    <div className={CharacterPageStyles.ImageCard}>
                        <img src={character.imgURL} alt="Picture of character" />
                    </div>
                </div>
                <div>
                    <h1 className={CharacterPageStyles.PageTitle}>Character name: {character.name}</h1>
                    <div>
                        {/* Combos */}
                        <p className={ComingSoonStyles.ComingSoon}>Combo Section coming soon</p>
                    </div>
                </div>
            </section>
        </>
    }

    return <>
        <h1>{isLoading}</h1>
    </>
}

export default CharacterPage;