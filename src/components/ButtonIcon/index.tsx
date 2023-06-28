import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps {
    icon: ReactNode
    empty?: number
    background?: string
}

export function ButtonIcon(props: ButtonProps) {

    const color = props.background ? "PURPLE" : "YELLOW"
    return (
        <Container backgroundColor={color}>
            {props.icon}
            {props.empty ? <span>{props.empty}</span> : null}
        </ Container>
    )
}