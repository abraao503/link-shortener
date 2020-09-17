import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0;
`;

export const Title = styled.p`
  font-size: 32px;
  color: var(--color-red);
  font-family: 'Roboto Slab', serif;
`;

export const List = styled.ul`
  margin: 15px auto 0;
  list-style-type: none;
  max-width: 30%;

  @media(max-width: 870px) {
    max-width: 80%;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 38px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 50px;
  border-color: white transparent transparent transparent;
`;