import React from "react";
import { ButtonIcon, Description, Icon } from "./style";
import { useState, useEffect } from "react";

export const IconPref = ({ source, text, sourceActive, onClick, active }) => {
    const [path, setPath] = useState(source)

    const handleIcon = () => {
        if (path === source) {
            setPath(sourceActive)
        } else {
            setPath(source)
        }
        onClick()
    }

    useEffect(() => {
        if (active) {
            setPath(sourceActive)
        } else {
            setPath(source)
        }
    }, [active])

    return (
        <ButtonIcon onPress={handleIcon}>
            <Icon source={path}/>
            <Description>{text}</Description>
        </ButtonIcon>
    )
}