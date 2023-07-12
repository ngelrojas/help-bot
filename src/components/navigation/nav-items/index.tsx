import { Grid } from "@mui/material";
import MenuItem from "../../menu-item";

//TODO: create a new MenuItem, but this time should be a button
export default function NavItems() {
  return (
    <Grid container sx={{ justifyContent: "flex-end" }}>
      <MenuItem title="SERVICES" link="/services" />
      <MenuItem title="PRICE" link="/demo" />
      <MenuItem title="CONTACT" link="/price" />
      <MenuItem title="REGISTER" link="/contact" />
    </Grid>
  );
}
