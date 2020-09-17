import styled from 'styled-components';
import backgroundHome from '../../assets/background-home.jpg';

export const Container = styled.div`
  background-image: url(${backgroundHome});
  background-size: cover;
  background-position: center;
  height: 90vh;
  flex-direction: column;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 8px 0;
  }
`;

export const Content = styled.div`
  color: #FFF;
  max-width: 460px;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  
  @media(max-width: 520px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  border: 0;
  outline: none;
  color: ${props => props.readyToCopy ? 'white' : 'var(--color-orange)'};
  font-weight: bold;
  background: transparent;
  border-bottom: 2px solid var(--color-orange);
  padding: 6px 0;
  font-size: 16px;
  flex: 1;
  margin-right: 8px;

  ::placeholder {
    color: var(--color-orange);
  }
`;

export const Button = styled.button`
  color: #FFF;
  font-weight: bold;
  background-color: var(--color-orange);
  width: 110px;
  height: 40px;
  outline: none;
  border: 0;
  transition: opacity 0.5s linear;

  @media(max-width: 520px) {
    margin-top: 15px;
    align-self: center;
  }
`;