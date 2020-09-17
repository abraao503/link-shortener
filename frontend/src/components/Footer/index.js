import React from 'react';

import iconTwitter from '../../assets/icon-twitter.png';
import iconFacebook from '../../assets/icon-facebook.png';

import { Container, ShortenerName, Icons } from './styles';

function Footer() {
  return (
    <Container>
      <ShortenerName>chr.dc</ShortenerName>
      <Icons>
        <img src={iconTwitter} alt="icon-twitter" />
        <img src={iconFacebook} alt="icon-facebook" />
      </Icons>
    </Container>
  )
}

export default Footer;