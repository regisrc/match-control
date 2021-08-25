import { Container, Title } from './styles';

import { IReportPerDateContainerProps } from '../../../../models/interfaces';

const ContainerComponent = ({ title } : IReportPerDateContainerProps) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
};

export default ContainerComponent;