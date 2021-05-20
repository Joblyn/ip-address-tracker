import React from 'react';
import { Container, Child, Content, Title, Detail, Border } from './styles';

export default function IpAddressContent({ ...restProps }) {
  return (
    <Container {...restProps}>
      <Child>
        <Content>
          <Title>IP address</Title>
          <Detail>192.212.174.101</Detail>
        </Content>
        <Border />
      </Child>
      <Child>
        <Content>
          <Title>Location</Title>
          <Detail>Brooklyn, NY 100001</Detail>
        </Content> 
        <Border />
      </Child>
      <Child>
        <Content>
          <Title>Timezone</Title>
          <Detail>UTC-05:00</Detail>
        </Content>
        <Border />
      </Child>
      <Child>
        <Content>
          <Title>ISP</Title>
          <Detail>SpaceX Starlink</Detail>
        </Content>
      </Child>
    </Container>
  )
};