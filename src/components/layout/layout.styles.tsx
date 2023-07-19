import { styled } from "styled-components";
import { Container } from "@mui/material";

interface ContainerSlidersProps {
  height: string;
}

export const ContainerSliders = styled(Container)<ContainerSlidersProps>`
  height: ${(props) => props.height}px;
  border-radius: 10px;
  border: 1.3px solid var(--light-stroke, rgba(255, 255, 255, 0.7));
  background: var(
    --background-for-slides,
    radial-gradient(
      314.45% 139.15% at 3.59% 3.24%,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.1) 100%
    )
  );
`;
