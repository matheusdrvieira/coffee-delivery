import { IconInfo, Box, Container } from "./style";
import { Header } from "../../components/Header";
import { CardCofee } from "../../components/CardCofee";
import imgCofeeLogoHome from "../../assets/Imagem.svg"
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import imgCofee1 from "../../assets/imgCofee.svg"
import imgCofee2 from "../../assets/Image2.svg"
import imgCofee3 from "../../assets/Image3.svg"
import imgCofee4 from "../../assets/Image4.svg"

export function Home() {

    return (
        <Container>
            <Header />
            <Box>
                <div className="title">
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                    <div className="info">
                        <div className="boxInfo">
                            <div className="boxIconParagraph">
                                <IconInfo backgroundColor={"YELLOW_DARK"}>
                                    <ShoppingCart size={16} color="#fafafa" weight="fill" />
                                </IconInfo>
                                <p>
                                    Compra simples e segura
                                </p>
                            </div>
                            <div className="boxIconParagraph">
                                <IconInfo backgroundColor={"YELLOW"}>
                                    <Timer size={16} color="#fafafa" weight="fill" />
                                </IconInfo>
                                <p>
                                    Entrega rápida e rastreada
                                </p>
                            </div>
                        </div>
                        <div className="boxInfo">
                            <div className="boxIconParagraph">
                                <IconInfo backgroundColor={"BROWN"}>
                                    <Package size={16} color="#fafafa" weight="fill" />
                                </IconInfo>
                                <p>
                                    Embalagem mantém o café intacto
                                </p>
                            </div>
                            <div className="boxIconParagraph">
                                <IconInfo backgroundColor={"PURPLE"}>
                                    <Coffee size={16} color="#fafafa" weight="fill" />
                                </IconInfo>
                                <p>
                                    O café chega fresquinho até você
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={imgCofeeLogoHome} alt="foto de um copo de cafe" />
            </Box>

            <main>
                <section>
                    <CardCofee
                        image={imgCofee1}
                        tags={[{ id: 1, name: "Tradicional" }]}
                        title="Expresso Tradicional"
                        description="O tradicional café feito com água quente e grãos moídos"
                        price={9.99}
                    />

                    <CardCofee
                        image={imgCofee2}
                        tags={[{ id: 1, name: "Tradicional" }, { id: 2, name: "gelado" }]}
                        title="Latte"
                        description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
                        price={9.99}
                    />

                    <CardCofee
                        image={imgCofee3}
                        tags={[{ id: 1, name: "Tradicional" }, { id: 2, name: "com leite" }]}
                        title="Capuccino"
                        description="Bebida com canela feita de doses iguais de café, leite e espuma"
                        price={9.99}
                    />
                    <CardCofee
                        image={imgCofee4}
                        tags={[{ id: 1, name: "Tradicional" }, { id: 2, name: "alcoólico" }]}
                        title="Macchiato"
                        description="Café expresso misturado com um pouco de leite quente e espuma"
                        price={9.99}
                    />
                </section >
            </main >
        </Container >

    )
}