import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';
import { IMenuComponentButtons } from '../../models/interfaces';

interface IMenuComponentButtonsArray {
    values: Array<IMenuComponentButtons>;
}

const Menu = (buttons : IMenuComponentButtonsArray) => {
    const history = useHistory();

    return (
            <Container>
                <Content>
                    {buttons.values.map((value, index) => (
                        <Button key={index} onClick={() => history.push(value.path)}>{value.title}</Button>       
                    ))}
                </Content>
            </Container>
    );
};

export default Menu;