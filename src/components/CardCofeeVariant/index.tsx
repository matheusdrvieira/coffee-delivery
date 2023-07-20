import { Trash } from "phosphor-react";
import { Container, ButtonRemove } from "./style";
import { InputNumber } from "../InputNumber";
import { useEffect, useState } from "react";

export interface CardCofeeVariantProps {
    id: number;
    image: string;
    title: string;
    price: number;
}

export function CardCofeeVariant(props: { data: CardCofeeVariantProps }) {
    const stored = JSON.parse(localStorage.getItem('@deliveryCofee:Order')!);
    const cofeeIndex = stored.cofees.findIndex((c: any) => c.id === props.data.id);
    const [amountQuantity, setAmountQuantity] = useState(stored.cofees[cofeeIndex].quantity);

    const handleQuantityChange = (newQuantity: number) => {
        const updatedCofees = [...stored.cofees];
        updatedCofees[cofeeIndex].quantity = newQuantity;

        const updatedOrder = { ...stored, cofees: updatedCofees };
        localStorage.setItem('@deliveryCofee:Order', JSON.stringify(updatedOrder));

        setAmountQuantity(newQuantity);
    };

    useEffect(() => {
        setAmountQuantity(stored.cofees[cofeeIndex].quantity);
    }, [amountQuantity]);

    function handleRemoveCofee(cofeeId: number) {
        const cofee = stored.cofees.filter((c: any) => c.id !== cofeeId)

        const newOrder = {
            cofees: cofee
        }
        localStorage.setItem('@deliveryCofee:Order', JSON.stringify(newOrder));
    }

    return (
        <Container>
            <img src={props.data.image} alt="foto de uma xicara de cafe" />
            <div className="info">
                <h1>{props.data.title}</h1>
                <div className="addAndRemove">
                    <InputNumber count={amountQuantity} onCountChange={handleQuantityChange} />
                    <ButtonRemove onClick={() => handleRemoveCofee(props.data.id)}>
                        <Trash size={16} color="#8047f8" weight="bold" />
                        Remover
                    </ButtonRemove>
                </div>
            </div>
            <span>{props.data.price.toFixed(2)}</span>
        </Container>
    )
}