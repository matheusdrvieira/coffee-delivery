import { Container } from "./style"
import { TagsCofee } from "../TagsCofee"
import { ShoppingCart } from "phosphor-react";
import { ButtonIcon } from "../ButtonIcon";
import { InputNumber } from "../InputNumber";
import { useState } from "react";

interface CardCofeeProps {
    id: number;
    image: string;
    tags: TagsProps[];
    title: string;
    description: string;
    price: number;
    quantity: number
}

interface TagsProps {
    id: number;
    name: string;
}

interface cofeeProps {
    id: number,
    image: string,
    price: number
    quantity: number
}

export function CardCofee(props: { data: CardCofeeProps }) {
    const [quantity, setQuantity] = useState(1);

    function handleAddCofee(data: CardCofeeProps) {
        const cofee = {
            id: data.id,
            image: data.image,
            title: data.title,
            price: data.price,
            quantity: quantity,
        };

        const storedOrders = JSON.parse(localStorage.getItem('@deliveryCofee:Order')!);

        if (storedOrders) {
            const updatedQuantityCofee = storedOrders.cofees.filter((c: cofeeProps) => {
                if (c.id === cofee.id) {
                    c.quantity += cofee.quantity
                    return c
                }
            })

            if (!updatedQuantityCofee.length) {
                storedOrders.cofees.push(cofee)
            }

            persistOrder(cofee, storedOrders)
        } else {
            persistOrder(cofee, storedOrders)
        }
    }

    function persistOrder(cofee: cofeeProps, storedOrders: cofeeProps) {
        const order = storedOrders ? storedOrders : {
            cofees: [cofee]
        }
        const ordersString = JSON.stringify(order);
        localStorage.setItem('@deliveryCofee:Order', ordersString);
    }

    return (
        <Container>
            <img src={props.data.image} alt="foto de uma xicara de cafe" />

            <div className="tags">
                {
                    props.data.tags.map((tag: TagsProps) => <TagsCofee key={tag.id} id={tag.id} name={tag.name} />)
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
                    onClick={() => handleAddCofee(props.data)}
                />
            </div>
        </Container>
    )
}