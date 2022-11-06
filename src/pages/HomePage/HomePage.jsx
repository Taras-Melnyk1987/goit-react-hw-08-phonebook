// import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Header, Title, Text } from './HomePage.styled';
import Container from '@mui/material/Container';

export const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
    navigate('/login');
  };
  return (
    <Header component="header">
      <Container maxWidth={'sm'}>
        <Title>Phonebook</Title>
        <Text componen="p">Keep all your contacts in save place!</Text>
        <Button children="let's go!" onClick={handleButtonClick} />
      </Container>
    </Header>
  );
};
