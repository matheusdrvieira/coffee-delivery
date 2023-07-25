import { Container, InfoOrder, Borda } from "./style";
import motorbike from "../../assets/Illustration.svg"
import { Header } from "../../components/Header";
import { IconSpan } from "../../components/IconSpan";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { Context } from "../../contexts";

export function FinishedOrder() {
    const { order } = useContext(Context);
    const address = order.address ?? undefined;

    const road = address?.road ?? "Não foi possível localizar sua rua";
    const number = address?.number ?? "Não foi possível localizar seu número";
    const district = address?.district ?? "Não foi possível localizar seu bairro";
    const city = address?.city ?? "Não foi possível localizar sua cidade";
    const uf = address?.uf ?? "Não foi possível localizar seu estado";

    return (
        <Container>
            <Header />
            <article>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </article>
            <main>
                <Borda>
                    <InfoOrder>
                        <div className="boxInfo">
                            <IconSpan icon={<MapPin size={16} color="#fafafa" weight="fill" />} color={"PURPLE"} />
                            {order.address ?
                                <div>
                                    <p>Entrega em <strong>{road}, {number}</strong></p>
                                    <p>{district} - {city}, {uf}</p>
                                </div> :
                                <p><strong>Não foi possível localizar seu endereço</strong></p>}
                        </div>
                        <div className="boxInfo">
                            <IconSpan icon={<Timer size={16} color="#fafafa" weight="fill" />} color={"YELLOW"} />
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </div>
                        <div className="boxInfo">
                            <IconSpan icon={<CurrencyDollar size={16} color="#fafafa" weight="fill" />} color={"YELLOW_DARK"} />
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>{order.paymentMethod}</strong>
                            </div>
                        </div>
                    </InfoOrder>
                </Borda>
                <section>
                    <img src={motorbike} />
                </section>
            </main>
        </Container>
    )
}