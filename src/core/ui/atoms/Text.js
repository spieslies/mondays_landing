import styled, {css} from 'styled-components';

const Text = styled.p`
  font-size: ${p => p.theme.font.size.normal};
  line-height: ${p => p.theme.font.lineHeight.normal};
  ${props => props.textHuge ? css
  `font-size: ${p => p.theme.font.size.huge};
   line-height: ${p => p.theme.font.lineHeight.huge};
   font-weight: ${p => p.theme.font.weight.w700};
   color: ${p => p.theme.colors.white};
   text-shadow: ${p => p.theme.shadows.level2};
  ` : ''}
  ${props => props.textBig ? css
  `font-size: ${p => p.theme.font.size.big};
   line-height: ${p => p.theme.font.lineHeight.huge};
   color: ${p => p.theme.colors.black};
   opacity: ${p => p.theme.opacity.small};
   font-weight: ${p => p.theme.font.weight.w400};
  ` : ''}
  ${props => props.textNormal ? css
  `font-size: ${p => p.theme.font.size.normal};
   line-height: ${p => p.theme.font.lineHeight.normal};
   font-weight: ${p => p.theme.font.weight.w400};
   color: ${p => p.theme.colors.black};
  ` : ''}
  ${props => props.textSmall ? css
  `font-size: ${p => p.theme.font.size.small};
   line-height: ${p => p.theme.font.lineHeight.small};
   color: ${p => p.theme.colors.black};
   opacity: ${p => p.opacity ? '${p => p.theme.opacity.normal}' : '1'};
  ` : ''}
  ${props => props.textSmaller ? css
  `font-size: ${p => p.theme.font.size.smaller};
   line-height: ${p => p.theme.font.lineHeight.smaller};
   color: ${p => p.theme.colors.almostBlack};
   opacity: ${p => p.theme.opacity.big};
  ` : ''}
`;

export default Text;
