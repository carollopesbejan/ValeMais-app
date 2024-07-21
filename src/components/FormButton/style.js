import styled from "styled-components/native";

export const Button = styled.Pressable`
    height: 40px;
    border-radius: 8px;
    margin-top: 48px;
    background-color: ${(props) => props.theme.colors.buttonColor};
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 700;
    text-align: center;
`;