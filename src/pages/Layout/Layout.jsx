import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainContainer from './Layout.styled';
import Container from '@mui/material/Container';
import AppBar from 'components/AppBar';
import { getIsRefreshing } from 'redux/auth/authSelectors';
import { HomePage } from 'pages/HomePage';
import { Footer } from 'components/Footer';
import { Toaster } from 'react-hot-toast';

export function Layout() {
  const currentPath = useMatch('/');
  const isRefreshingUser = useSelector(getIsRefreshing);

  return (
    <>
      {!isRefreshingUser && (
        <>
          {currentPath ? (
            <HomePage />
          ) : (
            <>
              <AppBar />
              <MainContainer component="main">
                <Container
                  maxWidth={'sm'}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    bgcolor: '#fff',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                    borderRadius: '4px',
                  }}
                >
                  <Outlet />
                </Container>
              </MainContainer>
              <Footer />
              <Toaster />
            </>
          )}
        </>
      )}
    </>
  );
}
