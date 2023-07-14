import { Grid } from "@mui/material";
import { NavMain, NavUp } from "../navigation";
import { BackGroundColor } from "./styled.header";

export default function Header() {
  return (
    <header>
      <nav>
        <Grid container>
          <NavUp />
        </Grid>
        <BackGroundColor container>
          <NavMain />
        </BackGroundColor>
      </nav>
    </header>
  );
}
