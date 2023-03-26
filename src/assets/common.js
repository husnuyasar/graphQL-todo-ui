import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  form{
    padding: 35px 30px 63px;
    border-radius: 8px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin:auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: min-content;
    width: 390px;
  }
`;

export const ImageContainer = styled.img`
  width: 40px;
  height: 32px;
  margin: 0 290px 25px 0;
  object-fit: contain;
`;

export const HeaderTitle = styled.span`
  width: 100%;
  height: 28px;
  margin: 25px 224px 6px 0;
  font-family: MarkPro;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue-grey);
`;

export const SubHeaderTitle = styled.span`
  width: 300px;
  height: 20px;
  margin: 6px 30px 43px 0;
  font-family: MarkPro;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--cool-grey-two);
`;

export const ButtonContainer = styled(Button)`
  padding: 8px 0px;
  width: 100%;
  border-radius: 4px;
  border: solid 1px var(--dark-sky-blue);
  background-color: var(--dark-sky-blue);
`

export const TextUnderline = styled.span`
  text-decoration: underline;
  font-family: MarkPro;
  font-size: 14px;
  color: var(--dark-blue-grey);
  cursor: pointer;
  
  //Warning important for .css-1i9d99g-MuiStack-root>:not(style)+:not(style) not properly used case senerio on Stack component Material UI

  margin-top: 22px !important; 
  margin-bottom: 52px !important
`
