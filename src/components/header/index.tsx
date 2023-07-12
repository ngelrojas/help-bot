import { Grid } from "@mui/material";
import { NavMain, NavUp } from "../navigation";

export default function Header() {
  return (
    <header>
      <nav>
        <Grid container>
          <NavUp />
          <NavMain />
        </Grid>
      </nav>
    </header>
  );
}
