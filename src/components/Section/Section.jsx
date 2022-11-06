import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
