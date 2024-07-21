import styled from "styled-components/native";

export const ButtonArrow = styled.Pressable`
    align-self: flex-start;
    margin-left: 10%;
    color: ${(props) => props.theme.colors.arrowColor};
`;

export const ContainerForms = styled.View`
    width: 80%;
    gap: ${(props) => props.theme.spacing.medium};
`;

export const ContainerField = styled.View`
    gap: ${(props) => props.theme.spacing.small};
`;

export const Label = styled.Text`
    font-size: ${(props) => props.theme.fontSize.medium};
`;

export const ContainerButton = styled.View`
    width: 80%;
    gap: ${(props) => props.theme.spacing.medium};
`;

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

export const Text = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.colors.textColor};
    text-align: center;
`;

export const LinkText = styled.Text`
    text-decoration: underline;
    font-weight: 700;
`;
