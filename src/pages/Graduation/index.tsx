import GraduationComponent from "../../components/GraduationComponent";
import GraduationSkeletonComponent from "../../components/GraduationSkeletonComponent";
import Header from "../../components/Header";
import { Container } from "./styles";
import { useParams } from 'react-router-dom';

import FloatAddButton from '../../components/FloatAddButton';
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { GetGraduation } from "../../api/controllers/Graduation";

const Graduation = () => {
  const params = useParams<any>();

  const [call, setCall] = useState<AxiosResponse | null | void>(null);

  useEffect(() => {
      const asyncCall = async () => {
          const result = await GetGraduation(params.id)

          setCall(result)
      };

      asyncCall();
  }, [])

  return (
    <>
      <Container>
        <Header title={"Visualização de graduação"} isReturnActive={true} path={"/graduationstudent"} />
        <GraduationSkeletonComponent data={call} />
        <GraduationComponent data={call} />
        <FloatAddButton url={`/graduationregister/${params.id}`} />
      </Container>
    </>
  );
};

export default Graduation;
