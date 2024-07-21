import { Input } from "./style"
import { useState } from "react"

export const FormField = ({ placeholder, setStateText, hidden }) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Input 
            placeholder={placeholder} 
            onChangeText={setStateText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
            secureTextEntry={hidden}>
        </Input>
    )
}