import { Grid } from "@mui/material";
export default function NavContacts() {
  return (
    <Grid container sx={{ justifyContent: "flex-start" }}>
      <Grid item xs={3}>
        contact 0009000000
      </Grid>
      <Grid item xs={3}>
        contact@help-bot.com
      </Grid>
    </Grid>
  );
}
