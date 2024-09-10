import { ButtonIcon, Description, Icon } from "./style";
import { useState } from "react";

export const IconPref = ({ source, text, sourceActive, onClick }) => {
    const [path, setPath] = useState(source)

    const handleIcon = () => {
        if (path === source) {
            setPath(sourceActive)
        } else {
            setPath(source)
        }
        onClick()
    }

    return (
        <ButtonIcon onPress={handleIcon}>
            <Icon source={path}/>
            <Description>{text}</Description>
        </ButtonIcon>
    )
}