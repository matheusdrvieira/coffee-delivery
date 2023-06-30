import { ReactNode } from "react";
import { Container } from "./style";

interface IconProps {
    icon: ReactNode
    color: any
}

export function IconSpan(props: IconProps) {

    return (
        <Container backgroundColor={props.color}>
            {props.icon}
        </Container>
    )
}