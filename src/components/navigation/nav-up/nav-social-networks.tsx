import { Grid } from "@mui/material";
export default function NavSocialNetworks() {
  return (
    <Grid container sx={{ justifyContent: "flex-end" }}>
      <Grid item xs={2}>
        facebook
      </Grid>
      <Grid item xs={2}>
        twitter
      </Grid>
      <Grid item xs={2}>
        linkedIn
      </Grid>
    </Grid>
  );
}
