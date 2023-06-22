import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps {
    icon: ReactNode
    empty: number
}

export function ButtonIcon(props: ButtonProps) {

    return (
        <Container>
            {props.icon}
            {props.empty ? <span>{props.empty}</span> : null}
        </Container>
    )
}