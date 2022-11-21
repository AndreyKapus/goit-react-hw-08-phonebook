import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StartPageContainer = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const StyledStartPageTittle = styled.h2`
  display: inline-block;
  font-size: 46px;
  font-family: Bradley Hand;
  width: 600px;
`;

export const StyledP = styled.p`
  font-size: 26px;
  font-family: Bradley Hand;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
`;
