import Header from "../../components/header";
import { Main } from "../../layout/layout.styles";
import SliderMain from "../../components/slider-main";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <SliderMain />
      </Main>
    </>
  );
}
