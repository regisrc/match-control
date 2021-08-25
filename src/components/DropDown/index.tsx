import { useState } from 'react';

import { Container, ContainerContent, Icon, Content } from './styles';

import ArrowUp from '../../assets/bxs-up-arrow.svg';
import ArrowDown from '../../assets/bxs-down-arrow.svg';

import { IDropDownProps } from '../../models/interfaces';

interface ParentCompProps {
    childComp: React.ReactNode;
}

const ParentComp = ({ childComp } : ParentCompProps) => {
    return <>{childComp}</>;
};

const DropDown = ({ containerChildren, contentChildren }: IDropDownProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <Container onClick={() => { setIsActive(!isActive) }} height="80px" isActive={isActive}>
                <ContainerContent>
                    <ParentComp childComp={containerChildren}/>
                </ContainerContent>
                <Icon src={isActive ? ArrowDown : ArrowUp} />
            </Container>
            <Content isActive={isActive}>
                <ParentComp childComp={contentChildren}/>
            </Content>
        </>
    );
};

export default DropDown;