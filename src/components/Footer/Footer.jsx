import Container from '@mui/material/Container';
import { FooterText, StyledFooter, Link } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth={'sm'} sx={{ padding: '16px 0px' }}>
        <FooterText>
          Developed by &#169;
          <Link
            href="https://linkedin.com/in/nataliia-semeshenko"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Nataliia Semeshenko
          </Link>
        </FooterText>
      </Container>
    </StyledFooter>
  );
};
