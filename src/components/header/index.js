import React from "react";
import { Container, Text } from "./styles";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function Title({ ...restProps }) {
  return <Text {...restProps}>IP Address Tracker</Text>;
};
