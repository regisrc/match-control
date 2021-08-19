import { createContext } from 'react'

import { IPresenceProps } from '../../models/interfaces'

export const Users = createContext<IPresenceProps[]>([
    {
        id: 0,
        name: "Everson Oliveira",
        value: 0,
        nickname: "Preto"
    },
    {
        id: 1,
        name: "Everson Oliveira",
        value: 0,
        nickname: "Preto"
    },
    {
        id: 2,
        name: "Everson Oliveira",
        value: 0,
        nickname: ""
    },
    {
        id: 3,
        name: "Everson Oliveira",
        value: 0,
        nickname: "Preto"
    },
    {
        id: 4,
        name: "Everson Oliveira",
        value: 0,
        nickname: "Preto"
    }
]);