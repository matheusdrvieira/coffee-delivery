import { Container } from "./style"
import { TagsCoffee } from "../TagsCoffee"
import { ShoppingCart } from "phosphor-react";
import { ButtonIcon } from "../ButtonIcon";
import { InputNumber } from "../InputNumber";
import { useContext, useState } from "react";
import { CardCoffeeProps, CoffeeProps, OrderProps, TagsProps } from "../../interfaces";
import { Context } from "../../contexts";

export function CardCoffee(props: { data: CardCoffeeProps }) {
    const { order, setOrder } = useContext(Context);
    const [quantity, setQuantity] = useState(1);

    function handleAddCoffee(data: CardCoffeeProps) {
        const BuildCoffee = {
            id: data.id,
            image: data.image,
            title: data.title,
            price: data.price,
            quantity: quantity
        };

        if (order) {
            const updatedCoffees = order.coffees.map((coffee: CoffeeProps) => {
                if (coffee.id === BuildCoffee.id) {
                    return { ...coffee, quantity: coffee.quantity += BuildCoffee.quantity };
                }
                return coffee;
            });

            const existingCoffee = updatedCoffees.some((coffee: CoffeeProps) => coffee.id === BuildCoffee.id)

            if (!existingCoffee) {
                updatedCoffees.push(BuildCoffee);
            }

            const updatedOrder = { ...order, coffees: updatedCoffees };
            persistOrder(updatedOrder);
        } else {
            const newOrder = {
                coffees: [BuildCoffee],
                paymentMethod: null
            };
            persistOrder(newOrder);
        }
    }

    function persistOrder(order: OrderProps) {
        const orderString = JSON.stringify(order);
        localStorage.setItem('@deliveryCofee:Order', orderString);
        setOrder(order);
    }

    return (
        <Container>
            <img src={props.data.image} alt="foto de uma xicara de cafe" />

            <div className="tags">
                {
                    props.data.tags.map((tag: TagsProps) => <TagsCoffee key={tag.id} id={tag.id} name={tag.name} />)
                }
            </div>

            <h1>{props.data.title}</h1>

            {props.data.description ? <p>{props.data.description}</p> : null}

            <div className="sectionBottonCard">
                <span>R$ <strong>{props.data.price.toFixed(2)}</strong></span>

                <InputNumber count={quantity} onCountChange={setQuantity} />

                <ButtonIcon
                    icon={<ShoppingCart size={20} color="#f4f4f4" weight="fill" />}
                    background="PURPLE"
                    onClick={() => handleAddCoffee(props.data)}
                />
            </div>
        </Container>
    )
}