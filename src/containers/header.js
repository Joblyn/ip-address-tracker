import React from "react";
import Header from "../components/header/index";

export default function HeaderContainer({ ...restProps }) {
  return (
    <Header>
      <Header.Title />
    </Header>
  );
}
