import { Grid } from "@mui/material";
import NavSocialNetworks from "./nav-social-networks";
import NavContacts from "./nav-contacts";

export default function NavUp() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <NavContacts />
      </Grid>
      <Grid item xs={6}>
        <NavSocialNetworks />
      </Grid>
    </Grid>
  );
}
