import React from 'react';

import { Container, Link, Hits } from './styles';

function Item({ link, hits }) {
  return (
    <Container>
      <Link href={link}>{link}</Link>
      <Hits>{hits}</Hits>
    </Container>
  )
}

export default Item;