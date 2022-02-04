import { StaticButtonContainer, FabButton } from './styles';

import AddIcon from '@material-ui/icons/Add';

import { useHistory } from "react-router-dom";

interface IFloatAddButton {
    url: string;
}

const FloatAddButton = (prop: IFloatAddButton) => {
    const history = useHistory();

    return (
        <StaticButtonContainer>
            <FabButton onClick={() => history.push(prop.url)} color="primary" aria-label="add">
                <AddIcon />
            </FabButton>
        </StaticButtonContainer>
    );
};

export default FloatAddButton;