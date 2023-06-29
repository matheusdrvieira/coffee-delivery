import { Trash } from "phosphor-react";
import { Container, ButtonRemove } from "./style";
import { InputNumber } from "../InputNumber";

interface CardCofeeVariantProps {
    id: number;
    image: string;
    title: string;
    price: number;
}

export function CardCofeeVariant(props: { data: CardCofeeVariantProps }) {

    return (
        <Container>
            <img src={props.data.image} alt="foto de uma xicara de cafe" />
            <div className="info">
                <h1>{props.data.title}</h1>
                <div className="addAndRemove">
                    <InputNumber />
                    <ButtonRemove>
                        <Trash size={16} color="#8047f8" weight="bold" />
                        Remover
                    </ButtonRemove>
                </div>
            </div>
            <span>{props.data.price.toFixed(2)}</span>
        </Container>
    )
}