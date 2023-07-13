import { Button, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { MenuItemProps } from "./service.menu";

export function MenuItem({ title, link }: MenuItemProps) {
  return (
    <Grid item xs={1} sx={{ alignSelf: "center" }}>
      <Link href={link} underline="none">
        {title}
      </Link>
    </Grid>
  );
}

export function MenuButtonItem({ title, link }: MenuItemProps) {
  return (
    <Grid item xs={2}>
      <Button href={link} variant="contained">
        {title}
      </Button>
    </Grid>
  );
}
