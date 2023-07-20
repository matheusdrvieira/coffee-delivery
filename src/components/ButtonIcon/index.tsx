import { ReactNode, ButtonHTMLAttributes } from "react";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode
    empty?: number
    background?: string
}

export function ButtonIcon(props: ButtonProps) {

    const color = props.background ? "PURPLE" : "YELLOW"
    return (
        <Container backgroundColor={color} {...props}>
            {props.icon}
            {props.empty ? <span>{props.empty}</span> : null}
        </ Container>
    )
}