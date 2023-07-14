import { Button, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { MenuItemProps } from "./service.menu";

export function MenuItem({ title, link }: MenuItemProps) {
  return (
    <Grid item xs={1} sx={{ alignSelf: "center" }}>
      <Link
        sx={{
          color: "var(--text-dark, #000C14)",
          fontWeight: "300",
        }}
        href={link}
        underline="none"
      >
        {title}
      </Link>
    </Grid>
  );
}

export function MenuButtonItem({ title, link }: MenuItemProps) {
  return (
    <Grid item xs={2}>
      <Button
        sx={{
          background: "var(--primary-00, #C668FF)",
          boxShadow: "none",
        }}
        href={link}
        variant="contained"
      >
        {title}
      </Button>
    </Grid>
  );
}
