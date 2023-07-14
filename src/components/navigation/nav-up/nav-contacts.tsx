import { Grid } from "@mui/material";
import { Span, Envelope, Phone } from "./nav.styled";

export default function NavContacts() {
  return (
    <Grid container sx={{ justifyContent: "flex-start" }}>
      <Grid sx={{ ml: 8 }} item xs={3}>
        <Envelope />
        <Span>contacto@helbot.com</Span>
      </Grid>
      <Grid item xs={3}>
        <Phone />
        <Span>+55 (11) 990000000</Span>
      </Grid>
    </Grid>
  );
}
