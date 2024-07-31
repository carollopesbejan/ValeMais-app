import styled from "styled-components/native";

export const Input = styled.TextInput`
    border: 1px solid #141414;
    height: 36px;
    border-radius: 8px;
    padding-left: 24px;
    color: ${(props) => (props.theme.colors.textColor)};
`;