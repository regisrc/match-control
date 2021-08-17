import { useContext, useRef } from 'react';

import Header from '../../components/Header';
import TitleCard from './components/TitleCard'
import UserCard from './components/UserCard'

import { Container, Button } from './styles';

import { IMainProps } from '../../models/interfaces';

import { Users } from '../../context/Presence';

const Main = () => {
    const context = useRef(useContext(Users));

    return (
        <>
            <Header />
            <Container>
                <TitleCard />
                {context.current.map((prop: IMainProps, index: number) => 
                    <UserCard key={index} value={prop} />
                )}
            <Button onClick={() => context.current.some(x => x.value === 0) ? alert("ERRO!") : alert("Salvo!")}>Gravar</Button>
            </Container>
        </>
    );
};

export default Main;