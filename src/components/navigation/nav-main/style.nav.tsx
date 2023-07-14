import { styled } from "styled-components";
import { Grid } from "@mui/material";

export const BackGround = styled(Grid)`
  background: var(
    --background-secondary,
    linear-gradient(
      180deg,
      #c9ffff 0%,
      rgba(224, 252, 255, 0.2) 92.19%,
      rgba(246, 255, 255, 0.1) 100%
    )
  );
  padding: 2%;
`;
