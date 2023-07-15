import { ContainerSliders } from "./slider.styles";
import { MenuButtonItem } from "../menu-item";

export default function SliderMain() {
  return (
    <ContainerSliders>
      <h2>Agência de Tecnologia, Bots Inteligentes de IA</h2>
      <h1>DESCUBRA O PODER DOS HELP BOTS</h1>
      <h4>
        Integre com a tecnologia AI, NOSSOS BOTS SÃO PERSONALIZADOS, para cada
        problema uma nova solução personalizada
      </h4>
      <MenuButtonItem title="DEMO PERSONALIZADO" link="/contato" />
    </ContainerSliders>
  );
}
