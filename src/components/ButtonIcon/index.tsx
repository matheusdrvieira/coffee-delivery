import { Container } from "./style";
import { ButtonProps } from "../../interfaces";

export function ButtonIcon(props: ButtonProps) {

    const color = props.background ? "PURPLE" : "YELLOW"
    return (
        <Container backgroundColor={color} {...props}>
            {props.icon}
            {props.empty ? <span>{props.empty}</span> : null}
        </ Container>
    )
}