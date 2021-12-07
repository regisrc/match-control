import { useState, useEffect } from 'react';
import { AxiosResponse } from "axios";

import { Container, Input, StyledButton as Button, ContentContainer, Tab } from './styles';

import Header from '../../components/Header';

import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

import { GetStudent, PutStudent } from '../../api/controllers/Student';
import { IStudentWithAddress } from '../../models/interfaces';

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <ContentContainer>{children}</ContentContainer>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Profile = () => {
    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    const [name, setName] = useState("");
    const [nickname, setNickName] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");

    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [district, setDistrict] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");

    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const showData = () => {
        const data : IStudentWithAddress = {
            "name": name,
            "nickname": nickname,
            "birthdate": birthday,
            "cpf": cpf,
            "email": email,
            "phone": phone,
            "address": {
                "street": street,
                "number": number,
                "complement": complement,
                "district": district,
                "zipCode": zipCode,
                "city": city
            }
        }

        // PutStudent(data, 1)
    }

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetStudent(1)

            setCall(result)
        };

        asyncCall();
    }, [])

    useEffect(() => {
        setName(call?.data.name);
        setNickName(call?.data.nickname);
        setBirthDay(call?.data.birthdate);
        setCpf(call?.data.cpf);
        setEmail(call?.data.email);
        setPhone(call?.data.phone);

        setStreet(call?.data.address?.street);
        setNumber(call?.data.address?.number);
        setComplement(call?.data.address?.complement);
        setDistrict(call?.data.address?.district);
        setZipCode(call?.data.address?.zipCode);
        setCity(call?.data.address?.city);
    }, [call?.data])

    return (
        <>
            <Header title={"Perfil"} isReturnActive={true} path={"/main"} />
            <Container>
                <Box sx={{ width: '95%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Dados Pessoais" {...a11yProps(0)} />
                            <Tab label="Endereço" {...a11yProps(1)} />
                            {/* <Tab label="Preferências" {...a11yProps(2)} /> */}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Input value={name} label="Nome" onChange={(e) => setName(e.target.value)} />
                        <Input value={nickname} label="Apelido" onChange={(e) => setNickName(e.target.value)} />
                        <Input value={cpf} label="CPF" onChange={(e) => setCpf(e.target.value)} />
                        <Input value={phone} label="Telefone" onChange={(e) => setPhone(e.target.value)} />
                        <Input value={email} label="E-mail" onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            value={birthday}
                            label="Data de Nascimento"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setBirthDay(e.target.value)}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Input defaultValue={street} label="Rua" onChange={(e) => setStreet(e.target.value)} />
                        <Input defaultValue={number} label="Número" onChange={(e) => setNumber(e.target.value)} />
                        <Input defaultValue={complement} label="Complemento" onChange={(e) => setComplement(e.target.value)} />
                        <Input defaultValue={district} label="Bairro" onChange={(e) => setDistrict(e.target.value)} />
                        <Input defaultValue={zipCode} label="CEP" onChange={(e) => setZipCode(e.target.value)} />
                        <Input defaultValue={city} label="Cidade" onChange={(e) => setCity(e.target.value)} />
                    </TabPanel>
                    {/* <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel> */}
                </Box>
                <Button variant="contained" onClick={() => showData()}>Salvar</Button>
            </Container>
        </>
    )
}

export default Profile;