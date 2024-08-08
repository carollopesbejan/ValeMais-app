import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #1294A2;
    align-items: center;
    height: 590px;
    width: 330px;
    border-radius: 40px;
    justify-content: space-evenly;
`;

export const Title = styled.Text`
    font-size: ${(props) => (props.theme.fontSize.medium)};
    font-weight: 700;
    color: ${(props) => (props.theme.colors.preferenciasTextColor)};
    margin: 0 10%;
`;

export const Row = styled.View`
    flex-direction: row;
    gap: 32px;
`;

export const ContainerButton = styled.View`
    width: 80%;
`;

export const SkipText = styled.Text`
    font-size: ${(props) => (props.theme.fontSize.extraSmall)};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${(props) => (props.theme.colors.preferenciasTextColor)};
    color: ${(props) => (props.theme.colors.preferenciasTextColor)};
    margin-left: 10%;
`;

export const Button = styled.Pressable`
    align-self: flex-start;
`;

export const Space = styled.View`
    height: 70px;
`;

export const RowLeft = styled.View`
    flex-direction: row;
    align-self: flex-start;
    margin-left: 10%;
`;

export const RowPref5 = styled.View`
    flex-direction: row;
    gap: 8px;
`;

export const RowPref5Left = styled.View`
    flex-direction: row;
    align-self: flex-start;
    margin-left: 5%;
`;