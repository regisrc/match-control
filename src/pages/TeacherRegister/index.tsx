import { useState } from 'react'; 

import { Container, Input, StyledButton as Button } from './styles';

import Header from '../../components/Header';

const StudentRegister = () => {
    const [name, setName] = useState("");

    const showData = () => {
        const data = {
            "name": name
        }

        console.log(data)
    }

    return (
        <>
            <Header title={"Registro de professor"} isReturnActive={true} path={"/registration"} />
            <Container>
                <Input label="Nome" onChange={(e) => setName(e.target.value)} />
                <Button variant="contained" onClick={() => showData()}>Registrar</Button>
            </Container>
        </>
    )
}

export default StudentRegister;