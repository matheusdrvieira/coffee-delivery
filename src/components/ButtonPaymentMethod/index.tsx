import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonPaymentMethodProps {
    icon: ReactNode
    title: string
}

export function ButtonPaymentMethod(props: ButtonPaymentMethodProps) {

    return (
        <Container>
            {props.icon}
            {props.title}
        </ Container>
    )
}