import { Container, InfoOrder, Borda } from "./style";
import motorbike from "../../assets/Illustration.svg"
import { Header } from "../../components/Header";
import { IconSpan } from "../../components/IconSpan";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function FinishedOrder() {

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
                            <div>
                                <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                                <p>Farrapos - Porto Alegre, RS</p>
                            </div>
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
                                <strong>Cartão de Crédito</strong>
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