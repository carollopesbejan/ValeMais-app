import styled from "styled-components/native";

export const Text = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.colors.textColor};
    text-align: center;
`;

export const LinkText = styled.Text`
    text-decoration: underline;
    font-weight: 700;
`;