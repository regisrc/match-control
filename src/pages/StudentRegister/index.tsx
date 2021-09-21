import { useState } from 'react'; 

import { Container, Input, StyledButton as Button } from './styles';

import Header from '../../components/Header';

const TeacherRegister = () => {
    const [name, setName] = useState("");
    const [nickname, setNickName] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const showData = () => {
        const data = {
            "name": name,
            "nickname": nickname,
            "birthdate": birthday,
            "cpf": cpf,
            "email": email,
            "phone": phone
        }

        console.log(data)
    }

    return (
        <>
            <Header title={"Registro de aluno"} isReturnActive={true} path={"/registration"} />
            <Container>
                <Input label="Nome" onChange={(e) => setName(e.target.value)} />
                <Input label="Apelido" onChange={(e) => setNickName(e.target.value)}/>
                <Input label="CPF" onChange={(e) => setCpf(e.target.value)}/>
                <Input label="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <Input label="Telefone" onChange={(e) => setPhone(e.target.value)}/>
                <Input
                    label="Data de Nascimento"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setBirthDay(e.target.value)}
                />
                <Button variant="contained" onClick={() => showData()}>Registrar</Button>
            </Container>
        </>
    )
}

export default TeacherRegister;