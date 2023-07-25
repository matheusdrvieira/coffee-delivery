import { IconProps } from "../../interfaces";
import { Container } from "./style";

export function IconSpan(props: IconProps) {

    return (
        <Container backgroundColor={props.color}>
            {props.icon}
        </Container>
    )
}