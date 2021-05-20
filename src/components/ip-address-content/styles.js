import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 85vw;
  max-width: 100rem;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.3rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  box-shadow:0 40px 80px rgba(0, 0, 0, 0.08);

  @media (min-width: 576px) {
    flex-direction: row;
    text-align: left;
    height: 14rem;
  };

  @media (max-width: 576px) {
    height: 25rem;
    padding-top: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  word-wrap: break-word;
`;

export const Title = styled.p`
  text-transform: uppercase;
  color: hsl(0, 0%, 59%);
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;

  @media (max-width: 576px) {
    margin-bottom: .5rem;
  };
`;

export const Detail = styled.div`
  color: hsl(0, 0%, 17%);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.5rem; 

  @media (max-width: 576px) {
    font-size: 1.8rem;
    lineheight: 1.8rem;
  };
`;

export const Child = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 25%;
  margin: 3% 0;
  padding: 0 3% 0 3%;
  width: 25%;
  

  @media (max-width: 576px) {
    width: 100%;
    margin: 0;
    height: 25%;
  }; 
`;

export const Border = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 1px;
  height: 80%;
  background-color: hsl(0, 0%, 85%);

  @media (max-width: 576px) {
    display: none;
  }
`;
