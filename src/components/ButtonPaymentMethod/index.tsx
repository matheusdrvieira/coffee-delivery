import { ButtonPaymentMethodProps } from "../../interfaces";
import { Container } from "./style";

export function ButtonPaymentMethod(props: ButtonPaymentMethodProps) {

    return (
        <Container {...props}>
            {props.icon}
            {props.title}
        </ Container>
    )
}