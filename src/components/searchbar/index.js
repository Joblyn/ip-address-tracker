import React from 'react';
import { Container, Input, Button } from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function SearchBar({ setSearchTerm, searchTerm, ...restprops}) {

  return (
    <Container  {...restprops}>
      <Input 
        type="text"
        name="search IP address"
        placeholder="Search for any IP address or domain"
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      <Button><MdKeyboardArrowRight size={30}/></Button>
    </Container>
  )
}