import { styled } from "styled-components";
import { SlEnvolope, SlPhone } from "react-icons/sl";
import { LiaFacebookF, LiaTwitter, LiaLinkedinIn } from "react-icons/lia";

export const Span = styled.span`
  color: var(--text-medium, #4b5358);

  /* Common/Caption/Link */
  font-family: Work Sans;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 21px; /* 150% */
`;

export const Envelope = styled(SlEnvolope)`
  margin-right: 10px;
  margin-top: 3px;
`;

export const Phone = styled(SlPhone)`
  margin-right: 10px;
`;

export const Facebook = styled(LiaFacebookF)`
  font-size: 17px;
`;

export const Twitter = styled(LiaTwitter)`
  font-size: 17px;
`;

export const Linkedin = styled(LiaLinkedinIn)`
  font-size: 17px;
`;
