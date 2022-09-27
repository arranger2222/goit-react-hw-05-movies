import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledNav } from './Layout.styled';

import { Box } from 'utilities/Box';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Box m="0 auto" p="0 15px" maxWidth="1300px">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
