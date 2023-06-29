import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ButtonPaymentMethod } from "../../components/ButtonPaymentMethod";
import { Container, Form, Button, BaseSectionOne, SectionTwo, SectionThree, Box, Info } from "./style";
import { CardCofeeVariant } from "../../components/CardCofeeVariant";
import { ORDER } from "../../service/staticApi";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";

export function FormAddress() {

    return (
        <Container>
            <Header />
            <main>
                <Box>
                    <h1>Complete seu pedido</h1>
                    <BaseSectionOne>
                        <Info>
                            <MapPinLine size={22} color="#c47f17" weight="bold" />
                            <div>
                                <h2>Endereço de Entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </Info>
                        <Form>
                            <div className="inputsTop">
                                <Input placeholder="CEP" />
                                <Input placeholder="Rua" />
                            </div>
                            <div className="inputsCenter">
                                <Input placeholder="Número" />
                                <Input placeholder="Complemento" />
                            </div>
                            <div className="inputsBotton">
                                <Input placeholder="Bairro" />
                                <Input placeholder="Cidade" />
                                <Input placeholder="UF" />
                            </div>
                        </Form>
                    </BaseSectionOne>
                    <SectionTwo>
                        <Info>
                            <CurrencyDollar size={22} color="#8047f8" weight="bold" />
                            <div>
                                <h2>Endereço de Entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </Info>
                        <div className="buttonsPayment">
                            <ButtonPaymentMethod icon={<CreditCard size={16} color="#8047f8" weight="bold" />} title="Cartão de crédito" />
                            <ButtonPaymentMethod icon={<Bank size={16} color="#8047f8" weight="bold" />} title="Cartão de crédito" />
                            <ButtonPaymentMethod icon={<Money size={16} color="#8047f8" weight="bold" />} title="Cartão de crédito" />
                        </div>
                    </SectionTwo>
                </Box>
                <Box>
                    <h1>Cafés selecionados</h1>
                    <SectionThree>
                        {
                            ORDER.map(data => (
                                <>
                                    <CardCofeeVariant
                                        key={data.id}
                                        data={data}
                                    />
                                    <hr />
                                </>
                            ))
                        }
                        <div className="infoAmount">
                            <p>Total de itens</p>
                            <span>R$ 29,70</span>
                        </div>
                        <div className="infoAmount">
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </div>
                        <div className="infoAmount">
                            <h3>Total</h3>
                            <h3>R$ 33,20</h3>
                        </div>
                        <Button>confirmar pedido</Button>
                    </SectionThree>
                </Box>
            </main>
        </Container >
    )
}