import { useContext, useRef } from 'react';
import Swal from 'sweetalert2';

import Header from '../../components/Header';
import Button from '../../components/Button';

import TitleCard from './components/TitleCard';
import UserCard from './components/UserCard';

import { Container } from './styles';

import { IPresenceProps, IAlertType } from '../../models/interfaces';

import { Users } from '../../context/Presence';

const Presence = () => {
    const titleText = 'Lista de Presença';
    const context = useRef(useContext(Users));

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const ButtonClick = () => {
        const status:IAlertType[]  = [
            {
                "icon": 'success',
                "title": "Salvo com sucesso!"
            },
            {
                "icon": 'error',
                "title": "Preencha todos os campos!"
            }
        ]

        const index: number = context.current.some(x => x.value === 0) ? 1 : 0;

        Toast.fire({
            icon: status[index].icon,
            title: status[index].title
        })
    }

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={""} />
            <Container>
                <TitleCard />
                {context.current.map((prop: IPresenceProps, index: number) =>
                    <UserCard key={index} value={prop} />
                )}
                <Button onClick={() => ButtonClick()} text={"Gravar"}/>
            </Container>
        </>
    );
};

export default Presence;