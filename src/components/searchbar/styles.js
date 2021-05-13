import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 65px;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 550px;
  border-radius: 20px 0 0 20px;
  color: hsl(0, 0%, 17%);
  padding: 2rem;
  font-size: 18px;
  border: none;
  font-weight: 600;

  &::placeholder, 
   ::-webkit-input-placeholder {
    color: hsl(0, 0%, 59%);
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.div`
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border: #000;
  
  &:hover {
    background-color: hsl(0, 0%, 59%);
  }
`;