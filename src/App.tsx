import './App.scss'
import { useEffect, useState } from 'react'
import { ICharacter } from './models/ICharacter.ts';
import { getAllCharacters } from './services/characterService.ts';
import Header from './components/Header.tsx';
import LandingPage from './components/Pages/Landing.tsx';
import Fighters from './components/Pages/Fighters.tsx';


function App() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    const sortOrder: string = "asc"
    const sortBy: string = "id"

    const addCharactersToState = async () => {
        const rows = await getAllCharacters(sortBy, sortOrder)
        setCharacters(rows)
    }

    useEffect(() => {
        if (characters.length > 0) return
        addCharactersToState()
    })

    return <>
        <Header />
        <LandingPage characters={characters} />
        {/* <Fighters characters={characters} /> */}
    </>
}



export default App
