import { IconInfo, Box, Container } from "./style";
import { Header } from "../../components/Header";
import { CardCofee } from "../../components/CardCofee";
import imgCofeeLogoHome from "../../assets/Imagem.svg"
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { API } from "../../service/staticApi";

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
                <h2>Nossos cafés</h2>
                <section>
                    {
                        API.map(data => (
                            <CardCofee
                                key={data.id}
                                data={data}
                            />
                        ))
                    }
                </section >
            </main >
        </Container >

    )
}