import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Container from './components/container';
import NavbarBrand from './components/navbarBrand';
import Logo from './components/Logo';
function App() {
  return (
    <>
<Header>
    <Container>
      <NavbarBrand href="/" className="Header__navbar" >
        <Logo text="udemy" logoLink="logo1.png" className="header__Logo"/>
      </NavbarBrand>
    </Container>

</Header>
<section>
  <Container>
    this is container
  </Container>
</section>
    
    </> 
  );
}
export default App;
