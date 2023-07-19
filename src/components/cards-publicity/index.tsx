import { Grid } from "@mui/material";
import WrapperSlider from "../layout/wrapperSlider";
import CardTool from "./card.help";
import { H2 } from "./card.styles";

export default function CardsPublicity() {
  const __height = "805";

  const publicities = [
    {
      title: "Card 1",
      images: "https://picsum.photos/seed/picsum/100/100",
      texts: "lorem one text",
    },
    {
      title: "Card 2",
      images: "https://picsum.photos/seed/picsum/100/100",
      texts: "lorem two text",
    },
    {
      title: "Card 3",
      images: "https://picsum.photos/seed/picsum/100/100",
      texts: "lorem three text",
    },
    {
      title: "Card 4",
      images: "https://picsum.photos/seed/picsum/100/100",
      texts: "lore four text",
    },
    {
      title: "Card 5",
      images: "https://picsum.photos/seed/picsum/100/100",
      texts: "lorem five text",
    },
    {
      title: "Card 6",
      images: "https://picsum.photos/seed/picsum/100/100",
      texts: "lorem six text",
    },
  ];

  return (
    <WrapperSlider height={__height}>
      <Grid
        item
        xs={12}
        sx={{
          marginLeft: 2,
          marginRight: 2,
          textAlign: "center",
        }}
      >
        <H2>
          Desarrollamos Chatbots Inteligentes para empresas e instituciones en
          forma personalizada, atendimiento con AI
        </H2>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        {publicities.map((publicity, index) => {
          return <CardTool key={index} {...publicity} />;
        })}
      </Grid>
    </WrapperSlider>
  );
}
