import styled from "styled-components/native";

export const ButtonArrow = styled.Pressable`
    align-self: flex-start;
    margin-left: 10%;
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
