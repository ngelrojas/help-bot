import { Grid } from "@mui/material";
import { MenuItem, MenuButtonItem } from "../../menu-item";
import { MENU_ITEMS } from "./service.nav";

export default function NavItems() {
  return (
    <Grid container sx={{ justifyContent: "flex-end" }}>
      {MENU_ITEMS.map((item, index) => {
        return <MenuItem key={index} title={item.title} link={item.link} />;
      })}
      <MenuButtonItem
        key={5}
        title="DEMO PERSONALIZADO"
        link="/personalized-test"
      />
    </Grid>
  );
}
