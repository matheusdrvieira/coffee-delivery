import { Container } from "./style";
import Logo from "../../assets/Logo.svg";
import { ButtonIcon } from "../ButtonIcon";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {

    return (
        <Container>
            <img src={Logo} alt="Logo CofeeDelivery" />
            <div className="boxRight">
                <div>
                    <MapPin size={22} color="#8047F8" weight="fill" />
                    <p>Porto Alegre, RS</p>
                </div>
                <ButtonIcon icon={<ShoppingCart size={22} color="#c47f17" weight="fill" />} empty={1} />
            </div>
        </Container>
    )
}