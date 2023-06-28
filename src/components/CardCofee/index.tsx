import { Container, InputNumber } from "./style"
import { TagsCofee } from "../TagsCofee"
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonIcon } from "../ButtonIcon";

interface CardCofeeProps {
    image: string
    tags: TagsProps[]
    title: string
    description: string
    price: number
}

interface TagsProps {
    id: number;
    name: string
}

export function CardCofee(props: CardCofeeProps) {

    return (
        <Container>
            <img src={props.image} alt="foto de uma xicara de cafe" />

            <div className="tags">
                {
                    props.tags.map(tag => <TagsCofee key={tag.id} id={tag.id} name={tag.name} />)
                }
            </div>

            <h1>{props.title}</h1>

            {props.description ? <p>{props.description}</p> : null}

            <div className="sectionBottonCard">
                <span>R$ <strong>{props.price}</strong></span>

                <InputNumber>
                    <Minus size={20} color="#8047f8" />
                    <input type="number" />
                    <Plus size={20} color="#8047f8" />
                </InputNumber>

                <ButtonIcon icon={<ShoppingCart size={20} color="#f4f4f4" weight="fill" />} background="PURPLE" />
            </div>

        </Container>
    )
}