import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { Facebook, Twitter, Linkedin } from "./nav.styled";

export default function NavSocialNetworks() {
  return (
    <Grid container sx={{ justifyContent: "flex-end" }}>
      <Grid item xs={1}>
        <Link href="#" sx={{ color: "#024579" }}>
          <Facebook />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="#" sx={{ color: "#024579" }}>
          <Twitter />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="#" sx={{ color: "#024579" }}>
          <Linkedin />
        </Link>
      </Grid>
    </Grid>
  );
}
