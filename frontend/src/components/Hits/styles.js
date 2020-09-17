import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 0 40px;
  background-color: var(--color-background-and-line);
`;

export const BigText = styled.p`
  font-size: 32px;
  color: var(--color-red);
  font-family: 'Roboto Slab', serif;
`;

export const Count = styled.div`
  background-color: #FFF;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 5px 10px;
  margin: 15px 0 8px;
`;

export const Text = styled.p`
  color: var(--color-supporting-text);
`;