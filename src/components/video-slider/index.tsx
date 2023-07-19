import WrapperSlider from "../layout/wrapperSlider";
import { Grid } from "@mui/material";

export default function VideoSlider() {
  const __height = "746";
  return (
    <Grid container>
      <Grid item xs={12} sx={{ margin: "1%" }}>
        <WrapperSlider height={__height}>
          <h1>Video Slider</h1>
        </WrapperSlider>
      </Grid>
    </Grid>
  );
}
