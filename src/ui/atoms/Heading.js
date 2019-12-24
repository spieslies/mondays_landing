import styled, { css } from 'styled-components';

import { withDynamicHeading, hiddenMixin } from 'ui/helpers';

const HeadingBase = styled.h3`
  font-weight: 700;
  font-family: ${p => p.theme.font.family.header};
  color: ${p => p.theme.colors.black};
  ${p => p.spaced && css`letter-spacing: ${p.theme.font.letterSpacing.accent};`}
  ${p => p.small && css`font-size: ${p.theme.font.size.small};`}
  ${p => p.smaller && css`font-size: ${p.theme.font.size.smaller};`}
  ${p => p.transform && css`text-transform: ${p.transform};`}
  ${p => p.accent && css`
    font-family: ${p.theme.font.family.accent};
    font-style: italic;
    font-weight: 400;
  `}
  ${p => p.noMargin && css`margin: 0;`}
  ${hiddenMixin}
  > span {
    opacity: 1;
    color: ${p => p.theme.colors.primary};
  }
  ${p => p.primary && css`color: ${p => p.theme.colors.primary};`}
  ${p => p.white && 'color: white;'}
`;

export default withDynamicHeading(HeadingBase);
