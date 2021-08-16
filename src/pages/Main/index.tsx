import { useState } from 'react';

import Header from '../../components/Header';
import TitleCard from './components/TitleCard'
import UserCard from './components/UserCard'

import { Container, Button } from './styles';

import { IMainProps } from '../../models/interfaces';

const Main = () => {
    const [props, setProps] = useState<IMainProps[]>([
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

    return (
        <>
            <Header />
            <Container>
                <TitleCard />
                {props.map((prop: IMainProps, index: number) => 
                    <UserCard value={prop} />
                )}
            <Button onClick={() => alert("Salvo")}>Gravar</Button>
            </Container>
        </>
    );
};

export default Main;