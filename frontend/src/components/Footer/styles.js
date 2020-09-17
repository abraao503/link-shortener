import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 20px 0;
`;

export const ShortenerName = styled.p`
  font-size: 20px;
  color: var(--color-red);
`;

export const Icons = styled.div`
  img {
    margin: 0 12px;
  }
`;
