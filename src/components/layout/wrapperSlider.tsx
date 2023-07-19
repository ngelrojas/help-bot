import { ContainerSliders } from "./layout.styles";

export default function WrapperSlider({ children, height }: any) {
  return <ContainerSliders height={height}>{children}</ContainerSliders>;
}
