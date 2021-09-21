import { useState } from 'react';

import { Container, Input, StyledButton as Button, ContentContainer, Tab } from './styles';

import Header from '../../components/Header';

import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

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
    const [name, setName] = useState("");
    const [nickname, setNickName] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [modality, setModality] = useState("");
    const [comission, setCommission] = useState("");

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
        const data = {
            "name": name,
            "nickname": nickname,
            "birthdate": birthday,
            "cpf": cpf,
            "email": email,
            "modality": modality,
            "comission": comission,
            "street": street,
            "number": number,
            "complement": complement,
            "district": district,
            "zipCode": zipCode,
            "city": city
        }

        console.log(data)
    }

    return (
        <>
            <Header title={"Perfil"} isReturnActive={true} path={""} />
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
                        <Input label="Nome" onChange={(e) => setName(e.target.value)} />
                        <Input label="Apelido" onChange={(e) => setNickName(e.target.value)} />
                        <Input label="CPF" onChange={(e) => setCpf(e.target.value)} />
                        <Input label="E-mail" onChange={(e) => setEmail(e.target.value)} />
                        <Input label="Modalidade" onChange={(e) => setModality(e.target.value)} />
                        <Input label="Comissão" onChange={(e) => setCommission(e.target.value)} />
                        <Input
                            label="Data de Nascimento"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setBirthDay(e.target.value)}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Input label="Rua" onChange={(e) => setStreet(e.target.value)} />
                        <Input label="Número" onChange={(e) => setNumber(e.target.value)} />
                        <Input label="Complemento" onChange={(e) => setComplement(e.target.value)} />
                        <Input label="Bairro" onChange={(e) => setDistrict(e.target.value)} />
                        <Input label="CEP" onChange={(e) => setZipCode(e.target.value)} />
                        <Input label="Cidade" onChange={(e) => setCity(e.target.value)} />
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