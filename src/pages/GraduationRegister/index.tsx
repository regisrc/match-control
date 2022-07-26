import { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  Container,
  Input,
  StyledButton as Button,
  Mask,
  MultiSelectDiv,
  MultiSelect,
  FaixaContainer,
  FaixaCor,
  AutoComplete,
  H4FaixaEscolhida,
} from "./styles";

import SnackBar from "../../components/SnackBar";

import { useParams } from 'react-router-dom';
import { GetNextGraduation } from "../../api/controllers/Graduation";

export interface IFaixaColor {
  name: string;
  value: string;
}

const GraduationAdd = () => {
  const [selectedValues, setSelectedValues] = useState<IFaixaColor>();
  const [call, setCall] = useState<any>();
  const params = useParams<any>();

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);

  useEffect(() => {
    const asyncCall = async () => {
        const result = await GetNextGraduation(params.id)

        setCall(result)
    };

    asyncCall();
}, [])
  return (
    <>
      <Container>
        <AutoComplete
          disablePortal
          options={[
            { name: "Branca", value: "white" },
            { name: "Azul", value: "blue" },
            { name: "Roxa", value: "purple" },
          ]}
          getOptionLabel={(option: any) => option.name}
          onChange={(e: any, nv: any) => setSelectedValues(nv)}
          renderInput={(params: any) => <Input {...params} label="Faixas*" />}
        />
        <FaixaContainer>
          {selectedValues && (
            <>
              <H4FaixaEscolhida>Faixa escolhida</H4FaixaEscolhida>
              <FaixaCor roundColor={selectedValues?.value} />
            </>
          )}
        </FaixaContainer>
        <Header
          title={"Adicionar graduação"}
          isReturnActive={true}
          path={`/graduation/${params.id}`}
        />
        {/* <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} /> */}
        <Input label="Dia*" />
        <Input label="Mês*" />
        <Input label="Ano*" />
        <Input label="Grau" placeholder={call?.data?.degree}/>
        <Input
          label="Obs"
          multiline
          rows={9}
          variant="filled"
        />
        <Button loadingPosition="center" variant="contained">
          Adicionar
        </Button>
      </Container>
    </>
  );
};

export default GraduationAdd;
