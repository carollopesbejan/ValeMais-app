import { Button, TextButton } from "./style"

export const FormButton = ({ fn, text }) => {
    return (
        <Button onPress={fn}><TextButton>{text}</TextButton></Button>
    )
}