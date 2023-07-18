import Header from "../../components/header";
import { Main } from "../../layout/layout.styles";
import SliderMain from "../../components/slider-main";
import { H1 } from "./home.styles";
import { Container, Grid } from "@mui/material";
import VideoSlider from "../../components/video-slider";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <SliderMain />
        <Container>
          <Grid container>
            <Grid item xs sx={{ display: "grid", justifyContent: "center" }}>
              <H1>Monitore a atividade do cliente em tempo real</H1>
            </Grid>
          </Grid>
        </Container>
        <VideoSlider />
      </Main>
    </>
  );
}
