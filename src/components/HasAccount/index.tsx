import { LinkText, Text } from "./style";

export const HasAccount = ({ text, fn, textLink }) => {
    return (
        <Text>{text} <LinkText onPress={fn}>{textLink}</LinkText></Text>
    )
}