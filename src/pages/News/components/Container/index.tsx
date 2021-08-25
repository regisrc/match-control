import { Container, Photo, Title } from './styles';

import { INewsContainerProps } from '../../../../models/interfaces';

const ContainerComponent = ({ title, photo } : INewsContainerProps) => {
    return (
        <Container>
            <Photo src={photo} />
            <Title>{title}</Title>
        </Container>
    );
};

export default ContainerComponent;