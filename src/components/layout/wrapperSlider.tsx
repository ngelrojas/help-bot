import { ContainerSliders } from "./layout.styles";

interface StyleProps {
  height: number;
}

export default function WrapperSlider<StyleProps>({ children, __styles }: any) {
  // const height = { height: __styles };
  return <ContainerSliders style={__styles}>{children}</ContainerSliders>;
}
