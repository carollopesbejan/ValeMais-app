import styled from "styled-components/native";

const backgroundColor = "#F3F1F4";
const arrowColor = "#E8A009";
const buttonColor = "#FFC17D";
const textColor = "#141414";

export const Container = styled.View`
    flex: 1;
    background-color: ${backgroundColor};
    align-items: center;
    justify-content: space-evenly;
`;

export const ButtonArrow = styled.Pressable`
    align-self: flex-start;
    margin-left: 10%;
    color: ${arrowColor};
`;

export const ContainerForms = styled.View`
    width: 80%;
    gap: 16px;
`;

export const ContainerButton = styled.View`
    width: 80%;
    gap: 16px;
`;

export const Button = styled.Pressable`
    height: 40px;
    border-radius: 8px;
    margin-top: 48px;
    background-color: ${buttonColor};
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${textColor};
    text-align: center;
`;

export const LinkText = styled.Text`
    text-decoration: underline;
    font-weight: 700;
`;
