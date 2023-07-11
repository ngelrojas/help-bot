import { Grid } from "@mui/material";
import MenuItem from "../menu-item";

export default function Nav() {
  return (
    <nav>
      <Grid container>
        <MenuItem title="SERVICES" link="/services" />
        <MenuItem title="DEMO" link="/demo" />
        <MenuItem title="PRICE" link="/price" />
        <MenuItem title="CONTACT" link="/contact" />
      </Grid>
    </nav>
  );
}
