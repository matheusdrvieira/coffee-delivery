import { Container } from "./style";
import Logo from "../../assets/Logo.svg";
import { ButtonIcon } from "../ButtonIcon";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Context } from "../../contexts";
import { Link } from "react-router-dom";

export function Header() {
    const { order } = useContext(Context)
    const cofeeNumberOfQuantity = order.coffees.length

    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logo CofeeDelivery" />
            </Link>
            <div className="boxRight">
                <div>
                    <MapPin size={22} color="#8047F8" weight="fill" />
                    <p>Cidade, UF</p>
                </div>
                <Link to="/order">
                    <ButtonIcon icon={<ShoppingCart size={22} color="#c47f17" weight="fill" />} empty={cofeeNumberOfQuantity} />
                </Link>
            </div>
        </Container>
    )
}