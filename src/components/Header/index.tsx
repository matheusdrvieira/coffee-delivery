import { Container } from "./style";
import Logo from "../../assets/Logo.svg";
import { ButtonIcon } from "../ButtonIcon";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts";
import { Link } from "react-router-dom";
import axios from "axios";
import { AddressProps } from "../../interfaces";

export function Header() {
    const { order } = useContext(Context);
    const cofeeNumberOfQuantity = order.coffees.length
    const [address, setAddress] = useState<AddressProps>();

    async function showPosition(position: any) {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAzWR_hOdgSFQJU856uxQSvgpKkL5Lwp-4`)
        const addressComponents = response.data.results[0].address_components
        const addressVo = {
            city: addressComponents[3].long_name,
            province: addressComponents[4].long_name,
            country: addressComponents[5].long_name,
            postCode: addressComponents[6].long_name,
            neighbourhood: addressComponents[2].long_name,
            street: addressComponents[1].long_name,
            uf: addressComponents[4].short_name,
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setAddress(addressVo);
    }

    function getLocation() {
        if (address) {
            return
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Permita sua Localizacao")
        }
    }

    useEffect(() => {
        getLocation()
    }, [address])

    const displayAddress = address ? `${address?.city}, ${address?.uf}` : "Permita sua Localizacao"
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logo CofeeDelivery" />
            </Link>
            <div className="boxRight" onClick={getLocation}>
                <div>
                    <MapPin size={22} color="#8047F8" weight="fill" />
                    <p>{displayAddress}</p>
                </div>
                <Link to="/order">
                    <ButtonIcon icon={<ShoppingCart size={22} color="#c47f17" weight="fill" />} empty={cofeeNumberOfQuantity} />
                </Link>
            </div>
        </Container>
    )
}