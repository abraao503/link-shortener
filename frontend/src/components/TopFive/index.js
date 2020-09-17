import React, { useEffect, useState } from 'react';

import { Container, Title, List, Arrow } from './styles';
import Item from './Item';
import api from '../../services/api';

function TopFive() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    loadLinks();
  }, []);

  async function loadLinks(){
    const { data } = await api.get('/links');

    setLinks(data);
  }

  return (
    <Container>
      <Title>TOP 5</Title>
      <List>
        {links.map(link => (
          <Item link={link.shortUrl} hits={link.hits} key={link.id} />
        ))}
      </List>
      <Arrow />
    </Container>
  )
}

export default TopFive;