import { Container } from "./style"
import { TagsCofee } from "../TagsCofee"
import { ShoppingCart } from "phosphor-react";
import { ButtonIcon } from "../ButtonIcon";
import { InputNumber } from "../InputNumber";

interface CardCofeeProps {
    id: number;
    image: string;
    tags: TagsProps[];
    title: string;
    description: string;
    price: number;
}

interface TagsProps {
    id: number;
    name: string;
}

export function CardCofee(props: { data: CardCofeeProps }) {

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

                <InputNumber />

                <ButtonIcon icon={<ShoppingCart size={20} color="#f4f4f4" weight="fill" />} background="PURPLE" />
            </div>

        </Container>
    )
}