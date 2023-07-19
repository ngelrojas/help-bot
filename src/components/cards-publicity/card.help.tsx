import { Grid } from "@mui/material";
import WrapperSlider from "../layout/wrapperSlider";

interface CardToolProps {
  title: string;
  images: string;
  texts: string;
}
export default function CardTool(cardProps: CardToolProps) {
  const __heightOne = "327";
  const { title, images, texts } = cardProps;

  return (
    <Grid item xs={3.8} sx={{ margin: 1 }}>
      <WrapperSlider height={__heightOne}>
        <Grid
          sx={{
            textAlign: "center",
            margin: 1,
            color: "color: var(--text-dark, #000C14)",
          }}
        >
          <h2>{title}</h2>
        </Grid>
        <Grid sx={{ textAlign: "center", margin: 1 }}>
          <img src={images} alt={title} />
        </Grid>
        <Grid
          sx={{
            textAlign: "center",
            margin: 1,
            color: "color: var(--text-medium, #4B5358)",
            fontWeight: "400",
          }}
        >
          <p>{texts}</p>
        </Grid>
      </WrapperSlider>
    </Grid>
  );
}
