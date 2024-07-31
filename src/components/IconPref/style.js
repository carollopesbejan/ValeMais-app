import styled from "styled-components/native";

export const ButtonIcon = styled.TouchableOpacity`
    gap: 8px;
    align-items: center;
`;

export const Icon = styled.Image`

`;

export const Description = styled.Text`
    color: ${(props) => (props.theme.colors.iconTextColor)};
    font-size: ${(props) => (props.theme.fontSize.extraSmall)};
    font-weight: 700;
    text-align: center;
    line-height: 16px;
`;