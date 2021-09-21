import styled from 'styled-components';
import { lighten } from 'polished';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MaterialTab from '@mui/material/Tab';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 100px;

    div {
        margin-bottom: 10px;
    }
`;

export const Input = styled(TextField)`
    width: 50%;

    @media (max-width: 720px) {
        width: 90%;
    }
`;

export const StyledButton = styled(Button)`
    && { 
        margin-top: 15px;
        background-color: ${props => props.theme.colors.primaryYellow};

        :hover {
            background-color: ${props => lighten(0.05, props.theme.colors.primaryYellow)};
        }
    }      
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

export const Tab = styled(MaterialTab)`
    && {
         color: ${props => props.theme.colors.primaryDark};
         font-family: Poppins,serif;
    }
`