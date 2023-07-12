import { Grid } from "@mui/material";
import NavItems from "../nav-items";
import NavLogo from "../nav-logo";

export default function NavMain() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <NavLogo />
      </Grid>
      <Grid sx={{ alignSelf: "center" }} item xs={8}>
        <NavItems />
      </Grid>
    </Grid>
  );
}
