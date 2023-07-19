import { Grid } from "@mui/material";
import { H2, H1, P, SlideBtnContainer } from "./slider.styles";
import { MenuButtonItem } from "../menu-item";
import WrapperSlider from "../layout/wrapperSlider";

export default function SliderMain() {
  const __height = "444";

  return (
    <WrapperSlider height={__height}>
      <H2>Agência de Tecnologia, Bots Inteligentes de IA</H2>
      <H1>DESCUBRA O PODER DOS HELP BOTS</H1>
      <P>
        Integre com a tecnologia AI, NOSSOS BOTS SÃO PERSONALIZADOS, para cada
        problema uma nova solução personalizada
      </P>
      <Grid container>
        <SlideBtnContainer sx={{ display: "grid", alignContent: "center" }}>
          <Grid item xs={12}>
            <MenuButtonItem title="DEMO PERSONALIZADO" link="/contato" />
          </Grid>
        </SlideBtnContainer>
      </Grid>
    </WrapperSlider>
  );
}
