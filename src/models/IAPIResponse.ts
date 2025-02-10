import { ICharacter } from "./ICharacter";

export interface IAPIResponse {
    count: number,
    rows: ICharacter[]
}

export interface ApiCharacterRes{
    data: ICharacter
}