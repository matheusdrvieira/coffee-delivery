import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ButtonPaymentMethod } from "../../components/ButtonPaymentMethod";
import { Container, Form, Button, BaseSectionOne, SectionTwo, SectionThree, Box, Info, Input } from "./style";
import { CardCofeeVariant, CardCofeeVariantProps } from "../../components/CardCofeeVariant";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

const addressFormValidationSchema = zod.object({
    cep: zod.string(),
    road: zod.string(),
    number: zod.string(),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string()
})

type formData = zod.infer<typeof addressFormValidationSchema>

export function FormAddress() {
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

    const response = JSON.parse(localStorage.getItem('@deliveryCofee:Order')!);

    function handlefinishedOrder(data: formData) {
        reset()
        console.log(data);
    }

    const formData = watch()
    const isSubmitDisabled = Object.values(formData).some((value) => !value);

    const total = response.cofees.reduce((a: number, c: any) => a + c.price, 0);
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
                                    <option value="Acre">AC</option>
                                    <option value="Alagoas">AL</option>
                                    <option value="Amazonas">AM</option>
                                    <option value="Amapá">AP</option>
                                    <option value="Bahia">BA</option>
                                    <option value="Ceará">CE</option>
                                    <option value="Distrito Federal">DF</option>
                                    <option value="Espírito Santo">ES</option>
                                    <option value="Goiás">GO</option>
                                    <option value="Maranhão">MA</option>
                                    <option value="Mato Grosso">MT</option>
                                    <option value="Mato Grosso do Sul">MS</option>
                                    <option value="Minas Gerais">MG</option>
                                    <option value="Pará">PA</option>
                                    <option value="Paraíba">PB</option>
                                    <option value="Paraná">PR</option>
                                    <option value="Pernambuco">PE</option>
                                    <option value="Piauí">PI</option>
                                    <option value="Rio de Janeiro">RJ</option>
                                    <option value="Rio Grande do Norte">RN</option>
                                    <option value="Rio Grande do Sul">RS</option>
                                    <option value="Rondônia">RO</option>
                                    <option value="Roraima">RR</option>
                                    <option value="Santa Catarina">SC</option>
                                    <option value="São Paulo">SP</option>
                                    <option value="Sergipe">SE</option>
                                    <option value="Tocantins">TO</option>
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
                            response.cofees.map((data: CardCofeeVariantProps) => (
                                <div key={data.id}>
                                    < CardCofeeVariant
                                        data={data}
                                    />
                                    <hr />
                                </div>
                            ))
                        }
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