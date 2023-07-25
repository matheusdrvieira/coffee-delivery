import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ButtonPaymentMethod } from "../../components/ButtonPaymentMethod";
import { Container, Form, Button, BaseSectionOne, SectionTwo, SectionThree, Box, Info, Input } from "./style";
import { CardCoffeeVariant } from "../../components/CardCoffeeVariant";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { CoffeeProps } from "../../interfaces";
import { useContext, useState } from "react";
import { Context } from "../../contexts";
import { useNavigate } from 'react-router-dom';

const addressFormValidationSchema = zod.object({
    cep: zod.string(),
    road: zod.string(),
    number: zod.string(),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string()
});

export type formData = zod.infer<typeof addressFormValidationSchema>

export function Order() {
    const { order, setOrder } = useContext(Context);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const { register, handleSubmit, watch, reset } = useForm({
        resolver: zodResolver(addressFormValidationSchema),
        defaultValues: {
            cep: '',
            road: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            uf: ''
        }
    });

    const navigate = useNavigate();

    function handlefinishedOrder(data: formData) {
        const updatedOrder = {
            ...order,
            address: {
                cep: data.cep,
                road: data.road,
                number: data.number,
                complement: data.complement,
                district: data.district,
                city: data.city,
                uf: data.uf,
            },
        };
        localStorage.setItem('@deliveryCofee:Order', JSON.stringify(updatedOrder));
        setOrder(updatedOrder);
        reset()
        navigate("/finishedOrder")

        setTimeout(() => {
            localStorage.removeItem('@deliveryCofee:Order');
            setOrder({ coffees: [], address: undefined, paymentMethod: null });
            navigate("/")
        }, 30000);
    }

    function handleDefinePaymentMethod(method: string) {
        setSelectedPaymentMethod(method);
        const updatedOrder = { ...order, paymentMethod: method };
        localStorage.setItem('@deliveryCofee:Order', JSON.stringify(updatedOrder));
        setOrder(updatedOrder);
    }

    const formData = watch();
    const isSubmitDisabled = Object.values(formData).some((value) => !value) || !selectedPaymentMethod;

    const total = order.coffees.reduce((a: number, c: any) => a + c.price * c.quantity, 0)
    const freight = 5.30
    const amount = total + freight;
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
                                <Input
                                    type="number"
                                    placeholder="CEP"
                                    {...register("cep")}
                                />
                                <Input
                                    type="text"
                                    placeholder="Rua"
                                    {...register("road")}
                                />
                            </div>
                            <div className="inputsCenter">
                                <Input
                                    type="number"
                                    placeholder="Número"
                                    {...register("number")}
                                />
                                <Input
                                    type="text"
                                    placeholder="Complemento"
                                    {...register("complement")}
                                />
                            </div>
                            <div className="inputsBotton">
                                <Input
                                    type="text"
                                    placeholder="Bairro"
                                    {...register("district")}
                                />
                                <Input
                                    type="text"
                                    placeholder="Cidade"
                                    {...register("city")}
                                />
                                <select {...register("uf", { valueAsNumber: false })} defaultValue="">
                                    <option value="" hidden >UF</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AM">AM</option>
                                    <option value="AP">AP</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
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
                            <ButtonPaymentMethod
                                icon={<CreditCard size={16} color="#8047f8" weight="bold" />}
                                title="Cartão de crédito"
                                onClick={() => handleDefinePaymentMethod("Cartão de crédito")}
                                isSelected={selectedPaymentMethod === "Cartão de crédito"}
                            />
                            <ButtonPaymentMethod
                                icon={<Bank size={16} color="#8047f8" weight="bold" />}
                                title="Cartão de débito"
                                onClick={() => handleDefinePaymentMethod("Cartão de débito")}
                                isSelected={selectedPaymentMethod === "Cartão de débito"}
                            />
                            <ButtonPaymentMethod
                                icon={<Money size={16} color="#8047f8" weight="bold" />}
                                title="Dinheiro"
                                onClick={() => handleDefinePaymentMethod("Dinheiro")}
                                isSelected={selectedPaymentMethod === "Dinheiro"}
                            />
                        </div>
                    </SectionTwo>
                </Box>
                <Box>
                    <h1>Cafés selecionados</h1>
                    <SectionThree>
                        {order.coffees.map((data: CoffeeProps) => (
                            <div key={data.id}>
                                < CardCoffeeVariant
                                    coffee={data}
                                />
                                <hr />
                            </div>
                        ))}
                        <div className="infoAmount">
                            <p>Total de itens</p>
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                        <div className="infoAmount">
                            <p>Entrega</p>
                            <span>R$ {freight.toFixed(2)}</span>
                        </div>
                        <div className="infoAmount">
                            <h3>Total</h3>
                            <h3>R$ {amount.toFixed(2)}</h3>
                        </div>
                        <Button disabled={isSubmitDisabled} onClick={handleSubmit(handlefinishedOrder)}>confirmar pedido</Button>
                    </SectionThree>
                </Box>
            </main>
        </Container >
    )
}