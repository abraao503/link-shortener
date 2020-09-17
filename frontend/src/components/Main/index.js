import React, { useState, useRef } from 'react';

import { Container, Content, Form, Input, Button } from './styles';
import api from '../../services/api';

function Main() {
  const [readyToCopy, setReadyToCopy] = useState(false);
  const inputRef = useRef(null);

  function copyText(){
    inputRef.current.select();
    document.execCommand('copy');

    alert('Copiado :-]')
    setReadyToCopy(false);
  }

  async function handleCreateShortLink(){
    try {
      const { data } = await api.post('/links', {
        url: inputRef.current.value
      });

      inputRef.current.value = data.short_url;
      setReadyToCopy(true);
    } catch(err) {
      console.log(err);
      alert('Falha na conexão!');
    }
  }

  return (
    <Container>
      <Content>
        <h1>Encurte seus links.</h1>
        <p>
          Links são longos. Encurte os links que você deseja compartilhar,
          e acompanhe enquanto viajam através da internet.
        </p>
        <Form>
          <Input 
            placeholder="Cole o seu link aqui"
            ref={inputRef}
            readyToCopy={readyToCopy}
          />
          <Button 
            onClick={readyToCopy ? copyText : handleCreateShortLink} 
            type="button"
          >
            {readyToCopy ? 'COPIAR' : 'ENCURTAR'}
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default Main;