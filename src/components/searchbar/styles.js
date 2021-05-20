import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85vw;
  max-width: 60rem;
  height: 5.5rem;
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 55rem;
  border-radius: 1.3rem 0 0 1.3rem;
  color: hsl(0, 0%, 30%);
  padding: 2rem;
  font-size: 1.5rem;
  letter-spacing: .3px;
  border: none;
  font-weight: 600;

  :placeholder, 
   :-webkit-input-placeholder {
    color: hsl(0, 0%, 59%);
  }

  :focus {
    outline: none;
  }

  @media (max-width: 576px) { 
    width: 100%;
  };
`;

export const Button = styled.div`
  width: 20%;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
  border-radius: 0 1.3rem 1.3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 5.5rem;
  border: #000;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background-color: hsl(0, 0%, 59%);
  }
`;