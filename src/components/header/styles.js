import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:url("/images/pattern-bg.png");
  padding: 2.5rem 0;
  height: 30vh;
  min-height: 25rem;
  position: relative;
  box-sizing: border-box;


  @media (max-width: 576px) {
    height: 40vh;
    min-height: 285px;
  };
`;

export const Text = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  line-height: 3.5rem;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }  
`;