import React, { useState } from "react";
import Header from "../components/header/index";
import IpAddressContent from "../components/ip-address-content";
import SearchBar from "../components/searchbar";

export default function HeaderContainer({ ...restProps }) {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <Header>
      <Header.Title />
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <IpAddressContent />
    </Header>
  );
}
