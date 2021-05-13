import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:url("/images/pattern-bg.png");
  padding: 4rem 1.5rem;
  position: relative;
`;

export const Text = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }  
`;