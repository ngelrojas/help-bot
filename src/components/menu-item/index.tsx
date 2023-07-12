import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { MenuItemProps } from "./service.menu";

export default function MenuItem({ title, link }: MenuItemProps) {
  return (
    <Grid item xs={2}>
      <Link href={link} underline="none">
        {title}
      </Link>
    </Grid>
  );
}
