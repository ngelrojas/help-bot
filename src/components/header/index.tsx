import { Grid } from "@mui/material";
import { NavMain, NavUp } from "../navigation";
import { BackGroundColor, Nav } from "./styled.header";

export default function Header() {
  return (
    <header>
      <Nav>
        <Grid container>
          <NavUp />
        </Grid>
        <BackGroundColor container>
          <NavMain />
        </BackGroundColor>
      </Nav>
    </header>
  );
}
