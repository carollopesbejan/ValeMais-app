import { Pressable } from "react-native"
import { LinkText, Text } from "./style"

export const HasAccount = ({ text, fn, textLink }) => {
    return (
        <Text>{text} <Pressable onPress={fn}><LinkText>{textLink}</LinkText></Pressable></Text>
    )
}