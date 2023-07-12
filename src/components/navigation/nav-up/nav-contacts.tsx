import { Grid } from "@mui/material";
export default function NavContacts() {
  return (
    <Grid container sx={{ justifyContent: "flex-start" }}>
      <Grid sx={{ ml: 8 }} item xs={2}>
        contact 0009000000
      </Grid>
      <Grid item xs={3}>
        contact@help-bot.com
      </Grid>
    </Grid>
  );
}
