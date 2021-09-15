import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
    fontWeight: "100",
    lineHeight: "1.8"
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
    fontWeight: "400",
    lineHeight: "1.5"
  },
  [scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
    fontWeight: "600",
    lineHeight: "1.5"
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
    fontWeight: "600",
    lineHeight: "1.5"
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: ${({ scale }) => style[scale || scales.MD].fontWeight};
  line-height: ${({ scale }) => style[scale || scales.MD].lineHeight};

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
