import { Trash } from "phosphor-react";
import { Container, ButtonRemove } from "./style";
import { InputNumber } from "../InputNumber";
import { useContext, useState } from "react";
import { CoffeeProps } from "../../interfaces";
import { Context } from "../../contexts";

export function CardCoffeeVariant(props: { coffee: CoffeeProps }) {
    const { order, setOrder } = useContext(Context);
    const [newQuantityValue, setNewQuantityValue] = useState(props.coffee.quantity)

    const handleQuantityChange = (newQuantity: number) => {
        setNewQuantityValue(newQuantity)
        const updatedData = { ...props.coffee, quantity: newQuantity };

        const updatedCoffees = order.coffees.map((coffee: CoffeeProps) => {
            if (coffee.id === props.coffee.id) {
                return updatedData;
            }
            return coffee;
        });

        const paymentMethod = order.paymentMethod;

        localStorage.setItem('@deliveryCofee:Order', JSON.stringify({ coffees: updatedCoffees, paymentMethod }));
        setOrder({ ...order, coffees: updatedCoffees });
    };

    function handleRemoveCofee(coffeeId: number) {
        const newCoffee = order.coffees.filter((coffee: any) => coffee.id !== coffeeId)
        const paymentMethod = order.paymentMethod;

        localStorage.setItem('@deliveryCofee:Order', JSON.stringify({ coffees: newCoffee, paymentMethod }));
        setOrder({ ...order, coffees: newCoffee });
    }

    return (
        <Container>
            <img src={props.coffee.image} alt="foto de uma xicara de cafe" />
            <div className="info">
                <h1>{props.coffee.title}</h1>
                <div className="addAndRemove">
                    <InputNumber count={newQuantityValue} onCountChange={handleQuantityChange} />
                    <ButtonRemove onClick={() => handleRemoveCofee(props.coffee.id)}>
                        <Trash size={16} color="#8047f8" weight="bold" />
                        Remover
                    </ButtonRemove>
                </div>
            </div>
            <span>{props.coffee.price.toFixed(2)}</span>
        </Container>
    )
}