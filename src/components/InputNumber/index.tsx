import { Container } from "./style";
import { Minus, Plus } from "phosphor-react";

export function InputNumber() {

    return (
        <Container>
            <Minus size={20} />
            <input type="number" />
            <Plus size={20} />
        </Container>
    )
}