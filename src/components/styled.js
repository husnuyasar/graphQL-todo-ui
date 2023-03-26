import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const CancelSvgIcon = styled.svg`
    height: 16px;
    width: 16px;
    cursor: pointer;
`

export const FormControlLabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
`

export const StyledTypography = styled(Typography)`
    text-decoration: ${({using}) => using ? "none": "underline"};
    color: ${({using}) => using ? "var(--dark-blue-grey)" : "var(--dark-sky-blue)"};
    cursor: pointer;
    padding: 8px;
`

export const TypographyContainer = styled.div`
    display: 'flex';
    align-items: 'center';
`