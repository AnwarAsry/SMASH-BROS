import { useParams } from "react-router-dom";

function CharacterPage() {
    const { id } = useParams();

    return <>
        <h2>Character Page: {id}</h2>
    </>
}

export default CharacterPage;