import React, { useEffect, useState } from 'react';

import { Container, BigText, Count, Text } from './styles';
import api from '../../services/api';

function Hits() {
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    loadTotalHits();
  }, []);

  async function loadTotalHits(){
    const { data } = await api.get('/hits');

    setTotalHits(data.totalHits);
  }

  return (
    <Container>
      <BigText>HITS</BigText>
      <Count>
        <BigText>{totalHits}</BigText>
      </Count>
      <Text>Cliques em links</Text>
    </Container>
  )
}

export default Hits;