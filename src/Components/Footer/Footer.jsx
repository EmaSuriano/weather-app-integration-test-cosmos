import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.p`
  text-align: right;
  width: 100%;
  margin-right: 40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      Developed By <a href="https://github.com/EmaSuriano">Ema Suriano</a>
    </FooterContainer>
  );
};

export default Footer;
