import { ApiCharacterRes, IAPIResponse } from "../models/IAPIResponse";
import { ICharacter } from "../models/ICharacter";
import { get } from "./serviceBase";

export const getAllCharacters = async (sortBy: string | "id", sortOrder: string | "asc"): Promise<ICharacter[]> => {
    const url = `http://localhost:3000/character?sortBy=${sortBy}&sortOrder=${sortOrder}&q=`

    const data = await get<IAPIResponse>(url);
    return data.rows;
};

export const getCharacter = async (id: string): Promise<ICharacter> => {
    const url = `http://localhost:3000/character/${id}`

    const data = await get<ApiCharacterRes>(url);
    return data.data;
};