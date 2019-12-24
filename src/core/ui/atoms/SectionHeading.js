import styled from 'styled-components';

const SectionHeading = styled.h2`
  font-weight: 100;
  font-family: ${p => p.theme.font.family.header};
  color: ${p => p.theme.colors.black};
  opacity: 0.7;
  text-align: center;
  font-size: 58px;
  margin-top: 20px;
  margin-bottom: 50px;
  ${p => p.theme.between('sm', 'md')`
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 50px;
  `}
  ${p => p.theme.max('sm')`
    font-size: 38px;
    margin-bottom: 20px;
    margin-top: -15px;
    padding: 0 ${p => p.theme.general.mobilePadding};
  `}
`;

export default SectionHeading;
