import { styled } from "styled-components";
import { Container } from "@mui/material";

export const H2 = styled.h2`
  color: var(--text-medium, #4b5358);
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const H1 = styled.h1`
  color: var(--text-heading, #024579);
`;

export const P = styled.p`
  color: var(--text-dark, #000c14);
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 1.2rem;
`;

export const SlideBtnContainer = styled(Container)`
  height: 150px;
  margin-top: 8%;
`;
