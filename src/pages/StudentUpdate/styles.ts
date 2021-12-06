import styled from 'styled-components';
import { lighten } from 'polished';

import TextField from '@material-ui/core/TextField';
import InputMask from "react-input-mask";
import Button from '@mui/lab/LoadingButton';
import Multiselect from 'multiselect-react-dropdown';

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

export const Mask = styled(InputMask)`
    width: 50%;

    @media (max-width: 720px) {
        width: 90%;
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
        color: ${props => props.theme.colors.primaryDark};

        :hover {
            background-color: ${props => lighten(0.05, props.theme.colors.primaryYellow)};
        }
    }      
`

export const MultiSelectDiv = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 58px;

    && {
        color: ${props => props.theme.colors.primaryDark};
    }

    @media (max-width: 720px) {
        width: 90%;
    }

    div {
        margin: 0px;
    }
    input {
            height: 43px;
        }

        span{
        background: ${props => props.theme.colors.primaryYellow};
    }
`


export const MultiSelect = styled(Multiselect)`
    
`