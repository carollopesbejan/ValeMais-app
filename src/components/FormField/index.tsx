import { Input } from "./style"

export const FormField = ({ placeholder, setStateText, hidden }) => {

    return (
        <Input 
            placeholder={placeholder} 
            onChangeText={setStateText}
            secureTextEntry={hidden}>
        </Input>
    )
}