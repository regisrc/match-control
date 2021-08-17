import { createContext } from 'react'

import { IMainProps } from '../../models/interfaces'

export const Users = createContext<IMainProps[]>([
    {
        id: 0,
        name: "Everson Oliveira",
        value: 0
    },
    {
        id: 1,
        name: "Everson Oliveira",
        value: 0
    },
    {
        id: 2,
        name: "Everson Oliveira",
        value: 0
    },
    {
        id: 3,
        name: "Everson Oliveira",
        value: 0
    },
    {
        id: 4,
        name: "Everson Oliveira",
        value: 0
    }
]);